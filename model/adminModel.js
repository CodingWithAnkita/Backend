
const mongoose = require('mongoose')

const adminSchema = mongoose.model({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    idAdmin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: date.now()
    }

})


module.exports = mongoose.model("product",adminSchema)