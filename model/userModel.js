
const mongoose = require('mongoose')

const userSchema = mongoose.model({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    mobileno:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:date.now()
    }

})


module.exports = mongoose.model("product",userSchema)