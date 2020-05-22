const mongoose = require('mongoose');

const userPro = new mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    SecQues: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("user", userPro);