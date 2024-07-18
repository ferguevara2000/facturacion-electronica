import { pool } from '../db.js'

export class Clientes {
  static async getClients () {
    try {
      const [rows] = await pool.query('SELECT * FROM clientes')
      return rows
    } catch (error) {
      console.error('Error fetching clients in model:', error)
      throw error
    }
  }

  static async getClientById (id) {
    try {
      const [rows] = await pool.query('SELECT * FROM clientes WHERE id = ?', [id])
      return rows
    } catch (error) {
      console.error('Error fetching client by ID in model:', error)
      throw error
    }
  }

  static async createClient (client) {
    try {
      const { identificacion, tipoIdentificacion, nombre, apellido, direccion, idCanton, telefono, correo } = client
      const [result] = await pool.query(
        'INSERT INTO clientes (Identificacion, Tipo_Identificacion, Nombre, Apellido, Direccion, Id_Canton, Telefono, Correo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [identificacion, tipoIdentificacion, nombre, apellido, direccion, idCanton, telefono, correo]
      )
      return result.insertId
    } catch (error) {
      console.error('Error creating client in model:', error)
      throw error
    }
  }

  static async updateClient (id, client) {
    try {
      const { identificacion, tipoIdentificacion, nombre, apellido, direccion, idCanton, telefono, correo } = client
      const [result] = await pool.query(
        'UPDATE clientes SET Identificacion = ?, Tipo_Identificacion = ?, Nombre = ?, Apellido = ?, Direccion = ?, Id_Canton = ?, Telefono = ?, Correo = ? WHERE id = ?',
        [identificacion, tipoIdentificacion, nombre, apellido, direccion, idCanton, telefono, correo, id]
      )
      return result.affectedRows
    } catch (error) {
      console.error('Error updating client in model:', error)
      throw error
    }
  }

  static async deleteClientById (id) {
    try {
      const [result] = await pool.query('DELETE FROM clientes WHERE id = ?', [id])
      return result
    } catch (error) {
      console.error('Error deleting client in model:', error)
      throw error
    }
  }
}
