const express = require("express")
const Package = require("../models/model").Package
const Exercise = require("../models/model").Exercise
const middleware = require("../middleware")
const functions = require("../modules/functions")
const dashboard = express.Router()


dashboard.get("/", middleware.isLoggedIn, middleware.hasPackageSelected, function(req, res, next){
    Package.findOne({_id: req.user.selectedPackage}, function(err, foundPackage){
        if (err){
            console.log(err)
            console.log("hello")
        } else {
            Exercise.find({userId: req.user._id}).limit(10).sort({date:-1}).exec(function(err, foundExercise){
                const currentDay = foundExercise[0].workout
                const numberOfWorkouts = foundPackage.workouts.length -1
                console.log("found package " + foundPackage)  
                const nextDayLastDate = new Date(foundExercise[0].date)
                const nextDayArray = functions.nextDay(currentDay,numberOfWorkouts)
                res.render("dashboard", {package: foundPackage, nextDayArray: nextDayArray, nextDayLastDate})
            })
            
        }
    })
})




module.exports = dashboard