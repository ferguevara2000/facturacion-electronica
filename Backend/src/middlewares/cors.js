import cors from 'cors'

const ACEEPTED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:8080',
  'https://your-frontend-url.com'
]

export const corsMiddleware = ({ acceptedOrigins = ACEEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      callback(null, true)
    }

    if (!origin) return callback(null, false)

    return callback(new Error('Not allowed by CORS'))
  }
})
