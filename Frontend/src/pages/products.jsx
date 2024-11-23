import { useState, useEffect } from 'react'
import { Search, Pencil, Trash2, Eye } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import defaultImage from "../assets/default-image.jpg"
import ProductModal from '../components/Products/ProductModal'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 10

  // Llama a la API para obtener los productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products') // Reemplaza con tu API
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error("Error al obtener productos:", error)
      }
    }

    fetchProducts()
  }, [])

  // Filtra productos según el término de búsqueda
  const filteredProducts = products.filter(product =>
    product.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) 
  )

  // Paginación de productos
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Listado de Productos</h1>
      
      <div className="flex justify-between mb-4">
        <ProductModal/>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar productos..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead className="w-[100px]">Imagen</TableHead>
              <TableHead className="w-[200px]">Producto</TableHead>
              <TableHead className="w-[150px]">Categoría</TableHead>
              <TableHead className="w-[100px]">Precio</TableHead>
              <TableHead className="w-[100px]">Acción</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentProducts.map((product) => (
              <TableRow key={product.Codigo}>
                <TableCell className="font-medium">{product.Codigo}</TableCell>
                <TableCell>
                  <img
                    src={product.imagen_url ? `http://localhost:3000${product.imagen_url}` : defaultImage}// Usa la imagen de la API o una predeterminada
                    alt={`Imagen de ${product.name}`}
                    className="w-12 h-12 object-cover rounded"
                  />
                </TableCell>
                <TableCell>{product.Nombre}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="mr-2">
                    <Eye className="h-4 w-4"/>
                  </Button>
                  <Button variant="ghost" size="icon" className="mr-2">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center mt-4">
        {Array(Math.ceil(filteredProducts.length / productsPerPage)).fill(null).map((_, i) => (
          <Button
            key={i}
            variant={currentPage === i + 1 ? "default" : "outline"}
            className="mx-1 bg-white text-black hover:bg-gray-200 border border-black"
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  )
}