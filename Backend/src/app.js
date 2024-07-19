import { express } from 'express'
import { createClientRouter } from './routes/clients.routes.js'

export const createApp = ({ clientModel }) => {
  const app = express()
  app.use(express.json())

  app.use('/clients', createClientRouter({ clientModel }))

  app.listen(3000)
  console.log('listening on port 3000')
}
