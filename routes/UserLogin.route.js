const express=require("express")
const bcrypt=require("bcrypt")
const { UserModel } = require("../models/User.model")
const jwt=require("jsonwebtoken")
require("dotenv").config()


const userLoginRouter=express.Router()

userLoginRouter.post("/",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await UserModel.find({email})
        const hased_pass=user[0].password
        if(user.length>0){
            bcrypt.compare(password,hased_pass,(err,result)=>{
                if(result){
                    const token=jwt.sign({userID:user[0]._id},process.env.key)
                    res.status(201).send({"msg":"Login Successful","token":token})
                }else{
                    res.send("Wrong Credentials")
                }
            })
        }else{
            res.send("Wrong Credentials")
        }
    }catch(err){
        console.log(err)
        console.log("Error while logging in")
    }
})

module.exports={
    userLoginRouter
}