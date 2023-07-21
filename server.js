require('dotenv').config()
const express = require('express')
const mongoose= require('mongoose');
const productRoute = require('./routes/productRoute')
const app= express();
app.use(express.json())

const MONGOOSE_URL = process.env.MONGOOSE_URL
const port=process.env.PORT || 3000


app.use('/api/product',productRoute)
app.get('/',(req,res)=>{
    res.send("hello from nodeapi")
})

mongoose.connect(MONGOOSE_URL)
.then(()=>{
    console.log("connected with the database")
    app.listen(port,()=>{
        console.log("node server is running")
    })
}).catch((err)=>{
    console.log("error while connection")
})
