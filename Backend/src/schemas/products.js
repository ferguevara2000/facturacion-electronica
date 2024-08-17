import z from 'zod'

const ProductsSchema = z.object({
  Nombre: z.string({
    invalid_type_error: 'Nombre must be a string'
  }),
  Precio_Unitario: z.number({
    invalid_type_error: 'Precio_Unitario must be a number'
  }).positive('Precio_Unitario must be positive')
    .refine(val => /^\d+(\.\d{1,2})?$/.test(val.toFixed(2)), {
      message: 'Precio_Unitario must be a valid currency format (e.g., 1.25)'
    }),
  Precio_Adquisicion: z.number({
    invalid_type_error: 'Precio_Adquisicion must be a number'
  }).positive('Precio_Adquisicion must be positive')
    .refine(val => /^\d+(\.\d{1,2})?$/.test(val.toFixed(2)), {
      message: 'Precio_Adquisicion must be a valid currency format (e.g., 1.25)'
    }),
  Tasa_IVA: z.number({
    invalid_type_error: 'Tasa_IVA must be a number'
  }).refine(val => val === 0 || val === 15, {
    message: 'Tasa_IVA must be either 0 or 15'
  }),
  Id_Categoria: z.number().int().min(1).max(8),
  Id_ICE: z.number().int().min(1).max(6)
})

export function validateProduct (productSchema) {
  return ProductsSchema.safeParse(productSchema)
}
