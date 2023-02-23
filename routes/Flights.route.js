const express=require("express")
const { FlightModel } = require("../models/Filght.modle")

const flightRouter=express.Router()
flightRouter.post("/",async(req,res)=>{
    const data=req.body
    try{
        const flight=new FlightModel(data)
        await flight.save()
        res.status(201).send("Added the flight")
    }catch(err){
        console.log(err)
        console.log("Something went wrong")
    }
})

flightRouter.get("/",async(req,res)=>{
    let query=req.query
    try{
        const flights=await FlightModel.find(query)
        res.status(200).send(flights)
    }catch(err){
        console.log(err)
        console.log("Something went wrong")
    }
})

flightRouter.get("/:id",async(req,res)=>{
    let id=req.params.id
    try{
        const flights=await FlightModel.find({_id:id})
        res.status(200).send(flights)
    }catch(err){
        console.log(err)
        console.log("Something went wrong")
    }
})

flightRouter.patch("/:id",async(req,res)=>{
    let id=req.params.id
    let payload=req.body
    try{
        await FlightModel.findByIdAndUpdate({_id:id},payload)
        res.status(204).send(`Updated the flight data with ID ${id}`)
    }catch(err){
        console.log(err)
        console.log("Something went wrong")
    }
})


flightRouter.delete("/:id",async(req,res)=>{
    let id=req.params.id
    try{
        await FlightModel.findByIdAndDelete({_id:id})
        res.status(202).send(`Deleted the flight data with ID ${id}`)
    }catch(err){
        console.log(err)
        console.log("Something went wrong")
    }
})




module.exports={
    flightRouter
}