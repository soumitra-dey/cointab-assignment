const userModel=require("../model/user.model")
const express=require("express")
const {signup,login}=require("../controller/usercontroller")

const app=express.Router()


app.post("/signup",signup)

app.post("/login",login)



module.exports=app
