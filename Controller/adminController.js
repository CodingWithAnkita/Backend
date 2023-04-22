

const Cart = require('../model/adminModel')


exports.getCart = async(req,res)=>{
    try {
       const data = await Cart.find()
       return res.send({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}

exports.postCart = async(req,res)=>{
    try {
        const newCart = new Cart(req.body)
        const data = await newCart.save()
        return res.send({errors:false,data:data})
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}

exports.putCart = async(req,res)=>{
    try {
        const id = req.params.id 
        const data = await Cart.findByIdAndUpdate(id,req.body,{new:true})
        return res.send({errors:false,data:data})
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}

exports.deleteCart = async(req,res)=>{
    try {
        const id = req.params.id 
        const data = await Cart.findByIdAndDelete(id)
        return res.send({errors:false,data:data})
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}