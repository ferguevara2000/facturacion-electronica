import express from 'express'
import { createClientRouter } from './routes/clients.routes.js'
import { PORT } from './config.js'

export const createApp = ({ clientModel }) => {
  const app = express()
  app.use(express.json())

  app.use('/clients', createClientRouter({ clientModel }))

  app.use((req, res, next) => {
    res.status(404).json({
      message: 'Endpoint Not found'
    })
  })

  app.listen(PORT)
  console.log(`listening on port ${PORT}`)
}
