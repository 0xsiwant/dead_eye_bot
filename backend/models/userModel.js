const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    telegramId: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    balance: {
        type: Number,
        required: true
    }
})

const user = mongoose.model('User', userSchema, 'telegramUsers');

module.exports = user;