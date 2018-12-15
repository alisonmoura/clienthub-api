'use strict'

const UserService = require('./../service/UserService')

module.exports = class UserController {

    static async auth(req, res){
        try {
            let user = await UserService.auth(req.body)
            console.log(JSON.stringify(user))
            if(user) {
                res.json({ name: user.name, email: user.email })
            }else res.status(400).send("Usuário não encontrado!")
        } catch (error) {
            console.log(`UserController: erro ao autenticar usuário: ${error}`)
            res.status(500).send("Erro ao autenticar")
        }
    }

    static async findAll(req, res) {
        res.json(await UserService.findAll())
    }
    
    static async findById(req, res) {
        res.json(await UserService.findById(req.params.id))
    }

    static async create(req, res) {
        res.json(await UserService.create(req.body))
    }

}