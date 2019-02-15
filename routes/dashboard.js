const express = require("express")
const mongoose = require("mongoose")
const Exercise = require("../models/model").Exercise
const BodyWeight = require("../models/model").BodyWeight
const Package = require("../models/model").Package
const warrior_shredded = require("../modules/storedWorkouts").warrior_shredded
const router = express.Router()


router.get("/", function(req, res,next){
    //check to see if logged in
    Package.findOne({active: true}, function(err, foundPackage){
        if (err){
            console.log(err)
        } else {
            console.log(foundPackage.name)
            res.render("dashboard", {warriorWorkouts: warrior_shredded, package: foundPackage.name})
        }
    })
})



module.exports = router