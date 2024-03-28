const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    item: {
        type: String,
        required:true
    },
    user:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true

    },
    quentity:{
        type: Number,
        required:true

    }
},
{timestamps: true}

)
module.exports = mongoose.model("Order", orderSchema)