const express = require('express');

const app = express();

app.use("/text",(req,res)=>{
    res.send("hi");
})

app.listen(3000,()=>{
    console.log("Server is successfully listening to port 3000")
});