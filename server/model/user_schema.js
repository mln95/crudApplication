const mongoose = require('mongoose');
const unique_validator = require('mongoose-unique-validator');

const user = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
})

user.plugin(unique_validator);
module.exports = mongoose.model('User',user);