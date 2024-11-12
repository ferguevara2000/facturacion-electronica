import { validateProduct } from '../schemas/products.js'

export class ProductController {
  constructor ({ productModel }) {
    this.productModel = productModel
  }

  getProducts = async (req, res) => {
    try {
      const products = await this.productModel.getProducts()
      res.status(200).json(products)
    } catch (error) {
      console.error('Error fetching products in controller:', error)
      res.status(500).send('Error fetching clients')
    }
  }

  getProductById = async (req, res) => {
    const { id } = req.params

    if (!id) return res.status(400).send('ID is required')

    try {
      const [product] = await this.productModel.getProductById(id)

      if (!product) {
        return res.status(404).json({
          message: 'Producto no encontrado'
        })
      }

      res.status(200).json(product)
    } catch (error) {
      console.error('Error fetching product by ID in controller:', error)
      res.status(500).send('Error fetching product')
    }
  }

  saveProduct = async (req, res) => {
    const { id } = req.params
    const productData = req.body

    productData.Precio_Unitario = parseFloat(productData.Precio_Unitario)
    productData.Precio_Adquisicion = parseFloat(productData.Precio_Adquisicion)
    productData.Tasa_IVA = parseInt(productData.Tasa_IVA)
    productData.Id_Categoria = parseInt(productData.Id_Categoria)
    productData.Id_ICE = parseInt(productData.Id_ICE)

    // Si se subió un archivo de imagen, asignamos la URL con el nuevo nombre del archivo
    if (req.file) {
      productData.imagen_url = `/uploads/${req.file.filename}`
    } else {
      productData.imagen_url = '' // Definir un valor predeterminado si no hay imagen
    }

    // Validar datos del producto
    const result = validateProduct(productData)
    if (!result.success) return res.status(400).json({ error: JSON.parse(result.error.message) })

    try {
      if (id) {
        // Si el ID está presente, actualizamos el producto
        const affectedRows = await this.productModel.updateProduct(
          id,
          productData
        )

        if (affectedRows === 0) {
          return res.status(404).json({ message: 'Producto no encontrado' })
        }
        res.status(200).json({ message: 'Producto actualizado', id })
      } else {
        // Si el ID no está presente, creamos un nuevo producto
        const newProductId = await this.productModel.createProduct({
          product: productData
        })
        res.status(201).json({ message: 'Producto creado', id: newProductId })
      }
    } catch (error) {
      console.error('Error saving product in controller:', error)
      res.status(500).send('Error saving product')
    }
  }

  deleteProduct = async (req, res) => {
    const { id } = req.params

    if (!id) return res.status(400).send('ID is required')

    try {
      const result = await this.productModel.deleteProductById(id)

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: 'Producto no encontrado'
        })
      }

      res.status(200).json({ message: 'Producto eliminado' })
    } catch (error) {
      console.error('Error deleting product in controller:', error)
      res.status(500).send('Error deleting product')
    }
  }
}
