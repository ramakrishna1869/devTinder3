const express = require("express")
const app = express()
app.use("/"  , (req,res) => {
    res.send("hii server");
})
app.listen(777 , () => {
    console.log("server is running successfully")
});