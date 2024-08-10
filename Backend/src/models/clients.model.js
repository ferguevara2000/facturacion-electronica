/* eslint-disable camelcase */
import { pool } from '../db.js'

export class ClientsModel {
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

  static async createClient ({ client }) {
    try {
      const { Identificacion, Tipo_Identificacion, Nombre, Apellido, Direccion, Id_Canton, Telefono, Correo } = client
      const [result] = await pool.query(
        'INSERT INTO clientes (Identificacion, Tipo_Identificacion, Nombre, Apellido, Direccion, Id_Canton, Telefono, Correo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [Identificacion, Tipo_Identificacion, Nombre, Apellido, Direccion, Id_Canton, Telefono, Correo]
      )
      return result.insertId
    } catch (error) {
      console.error('Error creating client in model:', error)
      throw error
    }
  }

  static async updateClient (id, client) {
    try {
      const { Identificacion, Tipo_Identificacion, Nombre, Apellido, Direccion, Id_Canton, Telefono, Correo } = client
      const [result] = await pool.query(
        'UPDATE clientes SET Identificacion = ?, Tipo_Identificacion = ?, Nombre = ?, Apellido = ?, Direccion = ?, Id_Canton = ?, Telefono = ?, Correo = ? WHERE id = ?',
        [Identificacion, Tipo_Identificacion, Nombre, Apellido, Direccion, Id_Canton, Telefono, Correo, id]
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
