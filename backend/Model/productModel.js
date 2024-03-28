
const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
 
    name:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image :{
        type: String,
        required: true
    }
},
{timetamps: true}
)
module.exports = mongoose.model("product",productSchema)