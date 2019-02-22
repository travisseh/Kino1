const express = require("express")
const mongoose = require("mongoose")
const Exercise = require("../models/model").Exercise
const BodyWeight = require("../models/model").BodyWeight
const Package = require("../models/model").Package
const warrior_shredded = require("../modules/storedWorkouts").warrior_shredded
const dashboard = express.Router()


dashboard.get("/", function(req, res,next){
    //check to see if logged in
    Package.findOne({active: true}, function(err, foundPackage){
        if (err){
            console.log(err)
        } else if (foundPackage === null) {
            res.redirect("/selectPackage")
        } else {
            res.render("dashboard", {package: foundPackage})
        }
    })
})




module.exports = dashboard