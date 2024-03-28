const express = require("express")

const router = express.Router()

const orderController = require("../Controller/orderController")


router.post("/register/order", orderController)

module.exports = router
