import { Router } from 'express'
import { ClientController } from '../controllers/clients.controller'

export const createClientRouter = ({ clientModel }) => {
  const router = Router()

  const clientController = new ClientController({ clientModel })

  router.post('/clients', clientController.saveClient) // Crear cliente
  router.put('/clients/:id', clientController.saveClient) // Actualizar cliente
  router.delete('/clients/:id', clientController.deleteClient)
  router.get('/clients/:id', clientController.getClientById)
  router.get('/clients', clientController.getClients)

  return router
}
