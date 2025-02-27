const mongoose = require("mongoose");
const BookingSchema= new mongoose.Schema({ 
     name:String,
     mobile:String,
     email:String,
     restaurant: String
})

module.exports = mongoose.model("restaurant", BookingSchema);