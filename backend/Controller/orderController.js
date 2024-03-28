const orderModel = require("../Model/orderModel")

const registerOrder = async (req, res) =>{
    try{
        const newOrder = orderModel(req.body)
        const saveOrder = await newOrder.save()
        if(saveOrder){
            res.send(saveOrder)
        }
    }catch(error){
        console.log(error);
    }
}

module.exports = registerOrder