const { Schema, model } = require("mongoose");

const userSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    wrongpasscount:{
        type:Number,
        default:0
    },
    blockedtime:{
        type:Number,
        default:0
    }
})

const userModel=model("newusers",userSchema)

module.exports=userModel