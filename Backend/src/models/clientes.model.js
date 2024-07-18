import { pool } from '../db.js'

export class Clientes {
  static async getClients (req, res) {
    try {
      const [rows] = await pool.query('SELECT * FROM clientes')
      res.status(200).json(rows)
    } catch (error) {
      console.error('Error fetching clients:', error)
      res.status(500).send('Error fetching clients')
    }
  }

  static async getClientById (req, res) {
    const { id } = req.params

    if (!id) return res.status(400).send('ID is required')

    try {
      const [rows] = await pool.query('SELECT * FROM clientes WHERE id = ?', [id])

      if (rows.length === 0) {
        return res.status(404).json({
          message: 'Cliente no encontrado'
        })
      }

      res.status(200).json(rows[0])
    } catch (error) {
      console.error('Error fetching client:', error)
      res.status(500).send('Error fetching client')
    }
  }

  static async createClient (req, res) {
    const { identificacion, tipoIdentificacion, nombre, apellido, direccion, idCanton, telefono, correo } = req.body
    try {
      const [results] = await pool.query(
        'INSERT INTO clientes(Identificacion, Tipo_Identificacion, Nombre, Apellido, Direccion, Id_Canton, Telefono, Correo) VALUES(?,?,?,?,?,?,?,?)',
        [identificacion, tipoIdentificacion, nombre, apellido, direccion, idCanton, telefono, correo]
      )

      res.status(201).send({
        Id: results.insertId,
        identificacion,
        tipoIdentificacion,
        nombre,
        apellido,
        direccion,
        idCanton,
        telefono,
        correo
      })
    } catch (e) {
      console.error('Error creating client:', e)
      res.status(500).send('Error creating client')
    }
  }

  static async updateClient (req, res) {
    const { identificacion, tipoIdentificacion, nombre, apellido, direccion, idCanton, telefono, correo } = req.body
    try {
      const [result] = await pool.query(
        'UPDATE clientes SET Identificacion = ?, Tipo_Identificacion = ?, Nombre = ?, Apellido = ?, Direccion = ?, Id_Canton = ?, Telefono = ?, Correo = ? WHERE id = ?',
        [identificacion, tipoIdentificacion, nombre, apellido, direccion, idCanton, telefono, correo, req.params.id]
      )

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: 'Cliente no encontrado'
        })
      }

      res.status(200).send({
        Id: req.params.id,
        identificacion,
        tipoIdentificacion,
        nombre,
        apellido,
        direccion,
        idCanton,
        telefono,
        correo
      })
    } catch (error) {
      console.error('Error updating client:', error)
      res.status(500).send('Error updating client')
    }
  }

  static async deleteClient (req, res) {
    try {
      const [result] = await pool.query('DELETE FROM clientes WHERE id = ?', [req.params.id])

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: 'Cliente no encontrado'
        })
      }

      res.status(200).json({ message: 'Cliente eliminado' })
    } catch (error) {
      console.error('Error deleting client:', error)
      res.status(500).send('Error deleting client')
    }
  }
}
