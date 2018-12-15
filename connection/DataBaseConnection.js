'use strict'

const Mongoose = require('mongoose')
const config = require('./../config')

module.exports = class DataBaseConnection {
    static async connect() {
        if (!config.db) throw {
            message: "DataBaseConnection: o arquivo de configuração deve ter as configurações do banco de dados"
        }
        if (!config.db.host) throw {
            message: "DataBaseConnection: o arquivo de configuração deve ter informar o host de conexção com o banco de dados em db.host"
        }
        if (!config.db.port) throw {
            message: "DataBaseConnection: o arquivo de configuração deve ter informar a porta de conexção com o banco de dados em db.port"
        }
        if (!config.db.name) throw {
            message: "DataBaseConnection: o arquivo de configuração deve ter informar o nome do banco de dados em db.name"
        }

        try {
            if (config.db.user && config.db.password) return await Mongoose.connect(`mongodb://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}`, {
                useNewUrlParser: true
            })
            else return await Mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {
                useNewUrlParser: true
            });
        } catch (error) {
            throw {
                message: `DataBaseConnection: erro ao conectar com o DB: ${error}`
            }
        }
    }
}