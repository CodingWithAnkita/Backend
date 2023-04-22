
const Product = require('../model/productModel')


exports.getCProduct = async(req,res)=>{
    try {
       const data = await Product.find()
       return res.send({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}

exports.postProduct = async(req,res)=>{
    try {
        const newProduct = new Product(req.body)
        const data = await newProduct.save()
        return res.send({errors:false,data:data})
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}

exports.putProduct = async(req,res)=>{
    try {
        const id = req.params.id 
        const data = await Category.findByIdAndUpdate(id,req.body,{new:true})
        return res.send({errors:false,data:data})
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}

exports.deleteProduct = async(req,res)=>{
    try {
        const id = req.params.id 
        const data = await Cart.findByIdAndDelete(id)
        return res.send({errors:false,data:data})
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}