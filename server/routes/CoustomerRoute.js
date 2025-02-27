const express = require("express");
const route = express.Router();
const CoustomerController = require("../controllers/CoustomerConroller");

route.post("/booking", CoustomerController.CoustomerBooking);
// route.get("/homedoctorsdisplay", doctorController.doctorHomeDisplay);
route.post("/coustomersignup", CoustomerController.coustomersignup);
// route.post("/searchdoctor", doctorController.doctorSearch);
route.post("/coustomerlogin", CoustomerController.coustomerlogin);

module.exports = route;