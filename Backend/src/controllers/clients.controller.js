export class ClientController {
  constructor ({ clientModel }) {
    this.clientModel = clientModel
  }

  static async getClients (req, res) {
    try {
      const clients = await this.clientModel.getClients()
      res.status(200).json(clients)
    } catch (error) {
      console.error('Error fetching clients in controller:', error)
      res.status(500).send('Error fetching clients')
    }
  }

  static async getClientById (req, res) {
    const { id } = req.params

    if (!id) return res.status(400).send('ID is required')

    try {
      const [client] = await this.clientModel.getClientById(id)

      if (!client) {
        return res.status(404).json({
          message: 'Cliente no encontrado'
        })
      }

      res.status(200).json(client)
    } catch (error) {
      console.error('Error fetching client by ID in controller:', error)
      res.status(500).send('Error fetching client')
    }
  }

  static async saveClient (req, res) {
    const { id } = req.params
    const clientData = req.body

    try {
      if (id) {
        // Si el ID está presente, actualizamos el cliente
        const affectedRows = await this.clientModel.updateClient(id, clientData)
        if (affectedRows === 0) {
          return res.status(404).json({ message: 'Cliente no encontrado' })
        }
        res.status(200).json({ message: 'Cliente actualizado', id })
      } else {
        // Si el ID no está presente, creamos un nuevo cliente
        const newClientId = await this.clientModel.createClient(clientData)
        res.status(201).json({ message: 'Cliente creado', id: newClientId })
      }
    } catch (error) {
      console.error('Error saving client in controller:', error)
      res.status(500).send('Error saving client')
    }
  }

  static async deleteClient (req, res) {
    const { id } = req.params

    if (!id) return res.status(400).send('ID is required')

    try {
      const result = await this.clientModel.deleteClientById(id)

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: 'Cliente no encontrado'
        })
      }

      res.status(200).json({ message: 'Cliente eliminado' })
    } catch (error) {
      console.error('Error deleting client in controller:', error)
      res.status(500).send('Error deleting client')
    }
  }
}
