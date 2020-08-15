const express = require("express");
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("hello word 1")
})

app.listen(port,()=>{
    console.log("Listening at ${port}");
})