import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:8080',
  'https://your-frontend-url.com',
  'http://localhost:5173'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => {
  return cors({
    origin: (origin, callback) => {
      // Si el origen está en la lista de orígenes aceptados
      if (acceptedOrigins.includes(origin)) {
        return callback(null, true)
      }

      // Si no hay origen (peticiones desde Postman o similares)
      if (!origin) {
        // Permitir la petición sin origen (cambiar a `true` si quieres permitir)
        return callback(null, true)
      }

      // Si el origen no está permitido
      return callback(new Error('Not allowed by CORS'))
    }
  })
}
