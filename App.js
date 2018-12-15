'use strict'

const Express = require('express')
const BodyParser = require('body-parser')
const Mongoose = require('mongoose')
const Cors = require('cors')
const DataBaseConnection = require('./connection/DataBaseConnection')

const app = new Express();

//Conexão com o DB
// Mongoose.connect('mongodb://clienthub:clienthub123@ds229474.mlab.com:29474/clienthub')
try {
    DataBaseConnection.connect()
} catch (error) {
    console.log(`Erro na conexão com o banco de dados: ${error}`)
}

app.use(BodyParser.json())
app.use(Cors())

// FILTER
app.options('*', function(req, res){
    res.send("OK");
})

app.get('/', function(req, res){
    res.send("API ClientHub v1.0.0")
})

// INSTANCIA TODOS OS MODELS
const User = require('./model/User')
new User()

// INSTANCIA TODAS AS ROTAS
const UserRouter = require('./router/UserRouter')
new UserRouter(app)

app.listen(3000) // "liga" a API na porta 3000