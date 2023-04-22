const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})


module.exports = mongoose.model("category",categorySchema)