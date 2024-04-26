const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    service:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})


const Booking = mongoose.model('Booking',bookingSchema)
module.exports = Booking