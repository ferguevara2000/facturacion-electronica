import express from 'express'

const app = express()

app.get('/provincias', (req, res) => {
  res.send('Obteniendo Provincias')
})

app.listen(3000)
console.log('listening on port 3000')
