import { pool } from '../db.js'

export const getClients = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM clientes')
  res.json(rows)
}

export const getClientById = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM clientes WHERE id = ?', [req.params.id])

  if (rows.length <= 0) {
    return res.status(404).json({
      messaje: 'Cliente no encontrado'
    })
  }

  res.json(rows[0])
}

export const updateClient = async (req, res) => {
  const { identificacion, tipoIdentificacion, nombre, apellido, direccion, idCanton, telefono, correo } = req.body
  const [rows] = await pool.query(
    'UPDATE clientes SET Identificacion = ?, Tipo_Identificacion = ?, Nombre = ?, Apellido = ?, Direccion = ?, Id_Canton = ?, Telefono = ?, Correo = ? WHERE id = ?',
    [identificacion, tipoIdentificacion, nombre, apellido, direccion, idCanton, telefono, correo, req.params.id])

  if (rows.length <= 0) {
    return res.status(404).json({
      messaje: 'Cliente no encontrado'
    })
  }

  res.send({
    Id: rows.insertId,
    identificacion,
    tipoIdentificacion,
    nombre,
    apellido,
    direccion,
    idCanton,
    telefono,
    correo
  })
}

export const createClient = async (req, res) => {
  const { identificacion, tipoIdentificacion, nombre, apellido, direccion, idCanton, telefono, correo } = req.body
  const [rows] = await pool.query(
    'INSERT INTO clientes(Identificacion, Tipo_Identificacion, Nombre, Apellido, Direccion, Id_Canton, Telefono, Correo) VALUES(?,?,?,?,?,?,?,?)',
    [identificacion, tipoIdentificacion, nombre, apellido, direccion, idCanton, telefono, correo])
  res.send({
    Id: rows.insertId,
    identificacion,
    tipoIdentificacion,
    nombre,
    apellido,
    direccion,
    idCanton,
    telefono,
    correo
  })
}

export const deleteClient = async (req, res) => {
  const [rows] = await pool.query('DELETE FROM clientes WHERE id = ?', [req.params.id])

  if (rows.length <= 0) {
    return res.status(404).json({
      messaje: 'Cliente no encontrado'
    })
  }

  res.json({ message: 'Cliente Eliminado' })
}
