require('dotenv').config();
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(process.env.PORT,() => {
    console.log('Servidor corriendo en el puerto', process.env.PORT);
})




console.log('Hola mundo!');