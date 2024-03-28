const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const app = express ()
app.use(express.json())
app.use(cors())
//conect data base
mongoose.connect("mongodb://localhost:27017/Ecomerse").then(()=>{
    console.log("Database has been connect successfully")
}).catch((error)=> console.log(error))

//import rountes 

const userRout = require("./Routes/userRout")
const Product = require("./Routes/productRout")
const orderRount = require("./Routes/orderRount")
app.use(userRout)
app.use(Product)
app.use(orderRount)

app.use("/image", express.static("productImage"))



//port number website 
app.listen(7000, () =>{
    console.log("server is runing");
})