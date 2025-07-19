const mongoose = require('mongoose')
const contactMessageSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
})
const contactMessages = mongoose.model("contactMessages", contactMessageSchema)
module.exports = contactMessages
