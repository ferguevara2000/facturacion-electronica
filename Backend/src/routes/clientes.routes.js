import { Router } from 'express'
import { getClients, getClientById, createClient, updateClient, deleteClient } from '../controllers/clientes.controller.js'

const router = Router()

router.get('/clientes', getClients)

router.get('/clientes/:id', getClientById)

router.post('/clientes', createClient)

router.put('/clientes/:id', updateClient)

router.delete('/clientes/:id', deleteClient)

export default router
