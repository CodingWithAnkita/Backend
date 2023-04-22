

const Category = require('../model/categoryModel')


exports.getCategory = async(req,res)=>{
    try {
       const data = await Category.find()
       return res.send({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}

exports.postCategory = async(req,res)=>{
    try {
        const newCategory = new Category(req.body)
        const data = await newCategory.save()
        return res.send({errors:false,data:data})
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}

exports.putCategory = async(req,res)=>{
    try {
        const id = req.params.id 
        const data = await Category.findByIdAndUpdate(id,req.body,{new:true})
        return res.send({errors:false,data:data})
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}

exports.deleteCategory = async(req,res)=>{
    try {
        const id = req.params.id 
        const data = await Cart.findByIdAndDelete(id)
        return res.send({errors:false,data:data})
    } catch (error) {
        return res.status(400).send({errors:true,message:error.message})
    }
}