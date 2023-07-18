const express = require('express')

const app= express();
app.get('/',(req,res)=>{
    res.send("hello this is the response")

})


app.listen(3000,()=>{console.log("node server is running")})