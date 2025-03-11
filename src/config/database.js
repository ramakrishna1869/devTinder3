const mongoose = require("mongoose");
const connectDB = async() => {
   await mongoose.connect("mongodb+srv://ramakrishna:ramakrishna1869@cluster0.vyzkc.mongodb.net/devTinder") 
}


module.exports = connectDB;