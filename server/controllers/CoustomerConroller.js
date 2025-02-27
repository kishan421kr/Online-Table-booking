// const CoustomerModel = require("../models/CoustomerModel");
const bookingModel= require("../models/CoustomerModel");
const SignupModel = require("../models/CoustomerSignup")

const CoustomerBooking=async(req, res)=>{
    console.log(req.body);
    
    const {name, mobile,restaurant,email} = req.body; 
    try {
        const booking = await bookingModel.create({
            name:name,
            mobile:mobile,
            restaurant:restaurant,
            email:email
        })

        res.status(201).send({msg:"Table Succesfully Booked!"});
    } catch (error) {
           res.status(400).send({msg:"Data base not Working"})
    }

}

const coustomersignup=async(req,res)=>{
    
    const {email,password,name,number,} = req.body
    
    try {
        const signup = SignupModel.create({
            name:name,
            email:email,
            Mobile:number,
            password:password
        })
        res.status(200).send({msg:"succesfully Singed Up!!"})
    } catch (error) {
        res.status(401).send({msg:"Server issues, try after sometimes!!"})
    }
}


const Displaybookings=async( req, res) =>{
    try {
         const bookings= await bookingModel.find();
         res.status(200).send(bookings);
    } catch (error) {
        console.log(error);
        res.status(401).send({msg:"not found!!"})
    }
}


const coustomerlogin =async(req, res)=>{
    const { email, password} = req.body;
    
    try {
     const coustomer = await SignupModel.findOne({email:email});
     if (!coustomer)
     {
       res.status(400).send({msg:"Invalid Email/Password"})
     }
 
     if (coustomer.password!=password)
     {
         res.status(400).send({msg:"Invalid Email/Password"});
     }
 
     res.status(200).send(coustomer);
 
    } catch (error) {
       console.log(error);
    }
 }

//  const doctorSearch=async(req, res)=>{
//     const { name, speciality}=req.body;
     
//     const Doctor = await DoctorModel.find({$or:[{"name":name}, {"specailization":speciality}]})
//     console.log(Doctor);
//     res.status(200).send(Doctor);
//   }

module.exports ={
    CoustomerBooking,coustomersignup,coustomerlogin,Displaybookings
    
}