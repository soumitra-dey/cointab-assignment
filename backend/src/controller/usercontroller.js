const userModel=require("../model/user.model")
// const app = require("../router/user.routes")


async function signup(req,res){
    const {email,password}=req.body
    try{
        await userModel.create({email,password})
        return res.status(200).send("User Created")
    }catch(e){
        return res.status(400).send(e.message)
    }
}



async function login(req,res){
    const {email,password}=req.body
    try{
        let user=await userModel.findOne({email})
        if (user.blockedtime!=0) {
            if (user.blockedtime<=(new Date().getTime())) {
                if (user.password==password) {
                    await userModel.findByIdAndUpdate({_id:user.id},{wrongpasscount:0,blockedtime:0})
                    res.status(200).send("Login Successfull")
                } else {
                    await userModel.findByIdAndUpdate({_id:user.id},{wrongpasscount:1,blockedtime:0})
                    res.status(400).send(`Wrong password! You have 4 chance left.`)
                }
            } else {
                res.status(400).send("You are blocked for 24 Hours, try after 24 hours.")
            }
        } else {
            if (user.password==password) {
                await userModel.findByIdAndUpdate({_id:user.id},{wrongpasscount:0,blockedtime:0})
                res.status(200).send("Login Successfull")
            } else {
                if (user.wrongpasscount==4) {
                    await userModel.findByIdAndUpdate({_id:user.id},{wrongpasscount:user.wrongpasscount+1,blockedtime:(new Date(Date.now() + 86400 * 1000).getTime())})
                    res.status(400).send("You cross your limit, try after 24 hours.")
                } else {
                    await userModel.findByIdAndUpdate({_id:user.id},{wrongpasscount:user.wrongpasscount+1,blockedtime:0})
                    res.status(400).send(`Wrong password! You have ${5-user.wrongpasscount-1} chance left.`)
                }
            }
        }
        
    }catch(e){
        return res.status(400).send(e.message)
    }
}


module.exports={signup,login}