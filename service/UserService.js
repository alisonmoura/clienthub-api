'use strict'

const Mongoose = require('mongoose')
const User = Mongoose.model('User');

module.exports = class UserService {

    static async auth(user) {
        try {
            return await User.findOne({ email: user.email, password: user.password })
        } catch (error) {
            throw { message: `UserService: erro ao autenticar: ${error}` }
        }
    }

    static async findAll() {
        return await User.find({});
    }

    static async findById(id) {
        return await User.findById(id);
    }

    static async create(user) {
        return await User.create(user);
    }

}