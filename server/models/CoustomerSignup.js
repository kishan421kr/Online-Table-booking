const mongoose = require("mongoose")

const SignupSchema = new mongoose.Schema({
    name:String,
    email:String,
    Mobile:Number,
    password:String
})

module.exports = mongoose.model("coustomerSignup" , SignupSchema)