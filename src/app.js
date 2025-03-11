const express = require("express")
const connectDB = require("./config/database")
const User = require("./models/user.js")
const app = express()

connectDB()
.then( () => {
    console.log("connected to database");
    app.listen(777 , () => {
        console.log("server is running successfully")
    });  
})
.catch( (err) => {
    console.log("Database not connected");
})

app.post("/signUp" , async(req , res) => {
    const user = new User({
        firstName : "rama2",
        lastName : "krishna2",
        email : "rama@gmail2",
        password : "1232",
        age:"172",
    });
    try{
        await user.save()
        res.send("user added successfully");
    }
    catch(err){
        res.status(400).end("Error in saving the user " + err.message);
    }
    

})


// app.use("/"  , (req,res) => {
//     console.log("rama");
//     res.send("hii server");
// })