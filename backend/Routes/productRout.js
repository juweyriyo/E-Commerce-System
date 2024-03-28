const express = require("express")

const router = express.Router()

const producctController = require("../Controller/productController")
const imageUpload = require("../middleware/imageUplod")

router.post("/product/register", imageUpload.single("image"), producctController.registeringProduct)
router.get("/product/read", imageUpload.single("image"), producctController.getAllProduct)
router.get("/product/single/:id", producctController.getSingleDatad)


module.exports = router
