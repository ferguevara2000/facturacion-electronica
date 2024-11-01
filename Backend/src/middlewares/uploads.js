import multer from 'multer'
import path from 'path'

// Configuración de Multer para el almacenamiento de imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../uploads') // Directorio donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)) // Renombra el archivo
  }
})

export const upload = multer({ storage })
