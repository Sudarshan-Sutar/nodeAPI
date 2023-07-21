const express = require('express');
const Product = require('../Models/productModel');
const { getProduct, getProducts, updateProduct, deleteProduct, addProduct } = require('../controller/productController');
const router = express.Router();


// get all the products
router.get('/',getProducts)
// get the product by id
router.get('/:id',getProduct)
// updating the product in the database
router.put('/:id',updateProduct)
// add the product to the database
router.post('/',addProduct)
//delete the product from the database
router.delete('/:id',deleteProduct)

module.exports =router 