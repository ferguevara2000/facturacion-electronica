import express from 'express'
import { PORT } from './config.js'
import { createClientRouter } from './routes/clients.routes.js'
import { corsMiddleware } from './middlewares/cors.js'
import { createProductRouter } from './routes/products.routes.js'

export const createApp = ({ clientModel, productModel }) => {
  const app = express()
  app.use(express.json())
  app.use(corsMiddleware())
  app.disable('x-powered-by')

  app.use('/clients', createClientRouter({ clientModel }))
  app.use('/products', createProductRouter({ productModel }))

  app.use((req, res, next) => {
    res.status(404).json({
      message: 'Endpoint Not found'
    })
  })

  app.listen(PORT)
  console.log(`listening on port ${PORT}`)
}
