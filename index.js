const express= require("express")
const { connection } = require("./config/db")
const cors=require("cors")
const { userRegisterRouter } = require("./routes/UserRegister.route")
const { userLoginRouter } = require("./routes/UserLogin.route")
const { flightRouter } = require("./routes/Flights.route")
require("dotenv").config()


const app=express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use("/register",userRegisterRouter)
app.use("/login",userLoginRouter)
app.use("/flights",flightRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Conneted to DB")
    }catch(err){
        console.log(err)
        console.log("Error while connecting to DB")
    }
    console.log(`Server is running at ${process.env.port} `)
})