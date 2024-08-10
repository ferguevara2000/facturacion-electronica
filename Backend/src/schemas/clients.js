import z from 'zod'
import validator from 'ec-docs-validator'
import { validatorIdentification } from '../utils/clientUtils.js'

const ClientSchema = z.object({
  Identificacion: z.string({
    invalid_type_error: 'Identificacion must be a string'
  }).refine(validatorIdentification, {
    message: 'Invalid Identificacion'
  }),
  Tipo_Identificacion: z.enum(['Cedula', 'RUC', 'Pasaporte', 'Identificación del Exterior', 'Consumidor Final'], {
    invalid_type_error: 'Tipo_Identificacion must be one of the specified values'
  }),
  Nombre: z.string({
    invalid_type_error: 'Nombre must be a string'
  }),
  Apellido: z.string({
    invalid_type_error: 'Nombre must be a string'
  }),
  Direccion: z.string({
    invalid_type_error: 'Direccion must be a string'
  }),
  Id_Canton: z.number().int().min(1).max(221),
  Telefono: z.string({
    invalid_type_error: 'Telefono must be a string'
  }).refine(validator.cellphone, {
    message: 'Invalid Telefono'
  }),
  Correo: z.string().email()
})

export function validateClient (client) {
  return ClientSchema.safeParse(client)
}
