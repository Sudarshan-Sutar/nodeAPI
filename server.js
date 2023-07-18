const express = require('express')
const mongoose= require('mongoose');
const Product = require('./Models/productModel');
const app= express();
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("hello from nodeapi")
})
// get all the product
app.get('/products',async (req,res)=>{
    try {
        const Products = await Product.find({})
        res.status(200).json(Products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
// get the product by id
app.get('/getProductbyid/:id',async(req,res)=>{
    try {
        const {id}= req.params
        const productbyid = await Product.findById(id)
        res.status(200).json(productbyid)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
// updating the product in the database
app.put('/product/:id',async(req,res)=>{
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
})
// add the product to the database
app.post('/addproduct',async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message:error.message})
        console.log("Error while creating Data")

    }
})
//delete the product from the database

app.delete('/deletebyproduct/:id',async (req,res)=>{
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
})

mongoose.connect('mongodb+srv://shrenik4997:Shrenik4997@cluster0.n7i0uzb.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log("connected with the database")
    app.listen(3000,()=>{
        console.log("node server is running")
    })
}).catch((err)=>{
    console.log("error while connection")
})