import multer from 'multer'
import path from 'path'

// Configuración de Multer para el almacenamiento de imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads') // Directorio donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    // Utiliza el nombre del producto y la extensión del archivo
    const productName = req.body.Nombre.replace(/\s+/g, '_') // Reemplaza espacios por guiones bajos
    const fileExtension = path.extname(file.originalname)
    cb(null, `${productName}${fileExtension}`)
  }
})

export const upload = multer({ storage })
