
const userModel = require("../Model/userModel")


//diiwangalin
const regesterUser = async (req,res) =>{
    try{
        const newUser = userModel(req.body)
        const seveUser = await newUser.save()
        if(seveUser){
            res.send(seveUser)
        }

    }catch(error){
        console.log(error);
    }
}

const loginUser = async (req,res) =>{
    try{
        if(req.body.email && req.body.password){
            const user = await userModel.findOne(req.body).select("-password")
            if(user){
                res.send(user)
            }
            else{
                res.send({
                    error: "User not Found"
                })
            }
        }
        else{
            res.send("Email and Password required")
        }
        

    }catch(error){
        console.log(error);
    }
}

module.exports = {
    regesterUser,
    loginUser
}