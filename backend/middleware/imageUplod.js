

const multer = require("multer")

const imageLocation = multer.diskStorage({
    //mesha xogta laga so qadayo
    destination:(req,file,cb) =>{
        cb(null ,"productImage")
    },
    //magaca lo bixinayo
    filename:(req,file,cb) =>{
        cb(null, file.originalname)
    }
})

const uploadImage = multer({
    storage: imageLocation
})

module.exports = uploadImage