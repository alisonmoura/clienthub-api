'use strict'

const Express = require('express')
const BodyParser = require('body-parser')
const Cors = require('cors')
const DataBaseConnection = require('./connection/DataBaseConnection')
const PORT = process.env.PORT || 3000

const app = new Express();

process.on('unhandledRejection', error => {
    console.log('unhandledRejection:', error.message);
});

try {
    DataBaseConnection.connect()
} catch (error) {
    console.log(`Erro na conexão com o banco de dados: ${error}`)
}

app.use(BodyParser.json())
app.use(Cors())

// FILTER
app.options('*', function (req, res) {
    res.send("OK");
})

app.get('/', function (req, res) {
    res.send("API ClientHub v1.0.0")
})

// INSTANCIA TODOS OS MODELS
const User = require('./model/User')
new User()

// INSTANCIA TODAS AS ROTAS
const UserRouter = require('./router/UserRouter')
new UserRouter(app)

console.log('API rodando na porta: ' + PORT)

app.listen(PORT)