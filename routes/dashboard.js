const express = require("express")
const Package = require("../models/model").Package
const Exercise = require("../models/model").Exercise
const User = require("../models/model").User
const middleware = require("../middleware")
const functions = require("../modules/functions")
const dashboard = express.Router()


dashboard.get("/", middleware.isLoggedIn, middleware.hasPackageSelected, function(req, res, next){
    Package.findOne({_id: req.user.selectedPackage}, function(err, foundPackage){
        if (err){
            console.log(err)
        } else if (foundPackage === null) {
            res.redirect("/selectPackage") 
        } else {
            //Get the askedaboutMacro status
            User.find({_id: req.user._id}, function(err, foundUser){
                if (err){
                    console.log(err)
                } else {
                    const askedAboutMacro = foundUser[0].askedAboutMacro

                    Exercise.find({userId: req.user._id}).limit(10).sort({date:-1}).exec(function(err, foundExercise){
                        //get the last date for all
                        let nextDayArray
                        let nextDayLastDate
                        if (foundExercise[0] === null || foundExercise[0] === undefined){
                            nextDayArray = ["A", 0]
                            nextDayLastDate = null
                        } else {
                            const currentDay = foundExercise[0].workout
                            const numberOfWorkouts = foundPackage.workouts.length -1
                            nextDayLastDate = new Date(foundExercise[0].date)
                            nextDayArray = functions.nextDay(currentDay,numberOfWorkouts)
                        }
                        res.render("dashboard", {package: foundPackage, nextDayArray: nextDayArray, nextDayLastDate, askedAboutMacro: askedAboutMacro, success: req.flash('success'), error: req.flash('error')})
                    })
                }
            })  
        }
    })
})

//Update askedAboutMacro Status
dashboard.post("/", middleware.isLoggedIn, function(req, res, next){
    User.updateOne({_id: req.user._id}, {askedAboutMacro: true}, function(err, raw){
        if (err){
            console.log(err)
        } else {
            res.send(raw)
        }
    })
})




module.exports = dashboard