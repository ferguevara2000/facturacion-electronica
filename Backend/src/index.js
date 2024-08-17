import { createApp } from './app.js'
import { ClientsModel } from './models/clients.model.js'
import { ProductsModel } from './models/products.model.js'

createApp({
  clientModel: ClientsModel,
  productModel: ProductsModel
})
