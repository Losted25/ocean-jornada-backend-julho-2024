const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})


//Desafio proposto
app.get('/oi', function (req, res){
  res.send("Olá, mundo!!")
})

app.listen(3000)