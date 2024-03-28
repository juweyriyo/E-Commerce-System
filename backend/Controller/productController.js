const productModel = require("../Model/productModel")

//registering new product

const registeringProduct =  async (req,res) =>{
    try{
        const newProduct  =productModel({
            name:req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.file.filename
        })
        const saveProduct = await newProduct.save()
        if(saveProduct){
            res.send(saveProduct)
        }

    }catch(error){
        console.log(error);
    }
}

//read
const getAllProduct = async (req, res) =>{
    const allProduct = await productModel.find()
    if(allProduct){
        res.send(allProduct)
    }
}

const getSingleDatad = async (req,res) =>{
    try{
        const singleProduct = await productModel.find({
            _id: req.params.id
        })
        if(singleProduct){
            res.send(singleProduct)
        }
    }catch(error){
        console.log(error);
    }
}

module.exports = {
registeringProduct,
getAllProduct,
getSingleDatad
}
