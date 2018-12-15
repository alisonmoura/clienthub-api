'use strict'

const Mongoose = require('mongoose')
if(!process.env.IS_HEROKU) const config = require('./../config')

module.exports = class DataBaseConnection {
    static async connect() {
        if (!config.db.host && !process.env.DB_HOST) throw {
            message: "DataBaseConnection: o arquivo de configuração deve ter informar o host de conexção com o banco de dados em db.host"
        }
        if (!config.db.port && !process.env.DB_PORT) throw {
            message: "DataBaseConnection: o arquivo de configuração deve ter informar a porta de conexção com o banco de dados em db.port"
        }
        if (!config.db.name && !process.env.DB_NAME) throw {
            message: "DataBaseConnection: o arquivo de configuração deve ter informar o nome do banco de dados em db.name"
        }

        let db = {
            host: config.db.host || process.env.DB_HOST,
            port: config.db.port || process.env.DB_PORT,
            name: config.db.name || process.env.DB_NAME,
            user: config.db.user || process.env.DB_USER,
            password: config.db.password || process.env.DB_PASS
        }

        try {
            if (db.user && db.password) return await Mongoose.connect(`mongodb://${db.user}:${db.password}@${db.host}:${db.port}/${db.name}`, {
                useNewUrlParser: true
            })
            else return await Mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`, {
                useNewUrlParser: true
            });
        } catch (error) {
            throw {
                message: `DataBaseConnection: erro ao conectar com o DB: ${error}`
            }
        }
    }
}