const express=require("express")
const bcrypt=require("bcrypt")
const { UserModel } = require("../models/User.model")



const userRegisterRouter=express.Router()


userRegisterRouter.post("/",async(req,res)=>{
    const {name,email,password}=req.body
    try{
        bcrypt.hash(password, 5, async(err,secure_password)=>{
            if(err){
                console.log(err)
            }else{
                const user=new UserModel({name,email,password:secure_password})
                await user.save()
                res.status(201).send("Registered")
            }
        })
    }catch(err){
        console.log(err)
        console.log(`Error in registering the user`)
    }
})


module.exports={
    userRegisterRouter
}