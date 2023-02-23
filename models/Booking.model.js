const mongoose=require("mongoose")

const BookingSchema=mongoose.Schema({
    user : {
         type: ObjectId,
         ref: 'user' 
        },
    flight : { 
        type: ObjectId, 
        ref: 'flight' 
    }
})

const BookingModel=mongoose.model("booking",BookingSchema)

module.exports={
    BookingModel
}