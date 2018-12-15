'use strict'

const Mongoose = require('mongoose')

module.exports = class User extends Mongoose.Schema{

        constructor() {
            super({
                name: { type: String, require: true },
                email: { type: String, require: true },
                password: { type: String, require: true }
            })

            Mongoose.model('User', this)
        }
}