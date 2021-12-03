require('dotenv').config()
const knex = require('./DB/connection')
const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hi')
})


app.listen(process.env.PORT, () => console.log(`Server has been started on PORT: ${process.env.PORT}`))
