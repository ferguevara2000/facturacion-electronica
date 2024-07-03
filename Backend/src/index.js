import express from 'express'
import clientesRoutes from './routes/clientes.routes.js'

const app = express()

app.use(express.json())

app.use(clientesRoutes)

app.listen(3000)
console.log('listening on port 3000')
