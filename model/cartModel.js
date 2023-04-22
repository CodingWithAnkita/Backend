
const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    name:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})


module.exports = mongoose.model("cart",cartSchema)