const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    telegramId: {
        type: String,
        required: true
    },
    username: {
    },
    balance: {
        type: Number
    }
})

const user = mongoose.model('User', userSchema, 'telegramUsers');

module.exports = user;