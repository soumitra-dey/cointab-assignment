const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
require('dotenv').config();
const userRouter=require("./router/user.routes")


const app=express()
app.use(express.json())
app.use(cors())
app.use("/user",userRouter)

app.get("/",(req,res)=>{
    res.send("Api running well...")
})

mongoose.connect(process.env.URL).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`listening to http://localhost:${process.env.PORT}`);
    })
})