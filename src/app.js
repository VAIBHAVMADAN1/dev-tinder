const express = require('express');
const app = express();
const {connectDB} = require("./config/database");
const {User} = require('./models/user');

connectDB()
.then(() => {
    console.log("Database connection established!");
    app.listen(3000, () => {
        console.log("Server is successfully listening to port 3000");
    });
})
.catch(err => { 
    console.log("Database connection failed") 
    console.log(err)})


app.use(express.json());

app.post('/signup',async(req,res)=> {
    const u = new User(req.body);
    console.log(req.body);
    try{
        
        await u.save();
        res.send("successful response");
    }
    catch (err) {
        res.status(400).send("error!!!")
    }
} 
)