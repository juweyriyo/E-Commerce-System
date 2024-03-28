//importin express 
const express = require("express")

const router = express.Router()

//importing file from controller folder
const userControler = require("../Controller/userController")
//making route for register new user
router.post("/user/register" , userControler.regesterUser)
//making route for login exsisting user
router.post("/user/login" , userControler.loginUser)

module.exports = router