
const User = require('../model/userModel')

exports.getUser = async(req,res)=>{
    try {
       const data = await User.find()
       return res.send({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}

exports.postUser = async(req,res)=>{
    try {
        const newUser = new User(req.body)
        const data = await newUser.save()
        return res.send({errors:false,data:data})
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}

exports.putUser = async(req,res)=>{
    try {
        const id = req.params.id 
        const data = await User.findByIdAndUpdate(id,req.body,{new:true})
        return res.send({errors:false,data:data})
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}

exports.deleteUser = async(req,res)=>{
    try {
        const id = req.params.id 
        const data = await User.findByIdAndDelete(id)
        return res.send({errors:false,data:data})
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}