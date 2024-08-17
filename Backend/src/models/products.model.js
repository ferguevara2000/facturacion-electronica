/* eslint-disable camelcase */
import { pool } from '../db.js'

export class ProductsModel {
  static async getProducts () {
    try {
      const [rows] = await pool.query('SELECT * FROM productos')
      return rows
    } catch (error) {
      console.error('Error fetching products in model:', error)
      throw error
    }
  }

  static async getProductsById (id) {
    try {
      const [rows] = await pool.query('SELECT * FROM productos WHERE Codigo = ?', [id])
      return rows
    } catch (error) {
      console.error('Error fetching product by Codigo in model:', error)
      throw error
    }
  }

  static async createProduct ({ product }) {
    try {
      const { Nombre, Precio_Unitario, Precio_Adquisicion, Tasa_IVA, Id_Categoria, Id_ICE } = product
      const [result] = await pool.query(
        'INSERT INTO productos (Nombre, Precio_Unitario, Precio_Adquisicion, Tasa_IVA, Id_Categoria, Id_ICE) VALUES (?, ?, ?, ?, ?, ?)',
        [Nombre, Precio_Unitario, Precio_Adquisicion, Tasa_IVA, Id_Categoria, Id_ICE]
      )
      return result.insertId
    } catch (error) {
      console.error('Error creating product in model:', error)
      throw error
    }
  }

  static async updateProduct (id, product) {
    try {
      const { Nombre, Precio_Unitario, Precio_Adquisicion, Tasa_IVA, Id_Categoria, Id_ICE } = product
      const [result] = await pool.query(
        'UPDATE productos SET Nombre =?, Precio_Unitario =?, Precio_Adquisicion =?, Tasa_IVA =?, Id_Categoria =?, Id_ICE =? WHERE Codigo =?',
        [Nombre, Precio_Unitario, Precio_Adquisicion, Tasa_IVA, Id_Categoria, Id_ICE, id]
      )
      return result.affectedRows
    } catch (error) {
      console.error('Error updating product in model:', error)
      throw error
    }
  }

  static async deleteProductById (id) {
    try {
      const [result] = await pool.query('DELETE FROM productos WHERE Codigo =?', [id])
      return result
    } catch (error) {
      console.error('Error deleting product by Codigo in model:', error)
      throw error
    }
  }
}
