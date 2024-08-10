import { Router } from 'express'
import { ClientController } from '../controllers/clients.controller.js'

export const createClientRouter = ({ clientModel }) => {
  const router = Router()

  const clientController = new ClientController({ clientModel })

  router.post('/', clientController.saveClient) // Crear cliente
  router.put('/:id', clientController.saveClient) // Actualizar cliente
  router.delete('/:id', clientController.deleteClient)
  router.get('/:id', clientController.getClientById)
  router.get('/', clientController.getClients)

  return router
}
