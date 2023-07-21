const Product = require("../Models/productModel")

//get all the product
const getProducts = async (req,res)=>{
    try {
        const Products = await Product.find({})
        res.status(200).json(Products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
//get single product
const getProduct = async(req,res)=>{
    try {
        const {id}= req.params
        const productbyid = await Product.findById(id)
        res.status(200).json(productbyid)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
//update the product
const updateProduct=async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            return res.status(300).json({message:`Product not found in the database with this id ${id}"`})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
//add the product

const addProduct = async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message:error.message})
        console.log("Error while creating Data")

    }
}
//delete the product
const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(600).json({message:`Product not found in the database with this id ${id}`})
        }
        res.status(200).json(product)
    } catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports={
    addProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}