'use strict'

const UserController = require('./../controller/UserController')

module.exports = class UserRouter {

    constructor(app) {
        
        app.post('/auth', UserController.auth)

        app.post('/users', UserController.create)
        app.get('/users', UserController.findAll)
        
        app.get('/users/:id', UserController.findById)
    }

}