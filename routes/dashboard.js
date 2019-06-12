const express = require("express")
const Package = require("../models/model").Package
const Exercise = require("../models/model").Exercise
const User = require("../models/model").User
const middleware = require("../middleware")
const functions = require("../modules/functions")
const dashboard = express.Router()


dashboard.get("/", middleware.isLoggedIn, middleware.hasAccess, middleware.hasPackageSelected, function(req, res, next){
    Package.findOne({name: req.user.packageName}, function(err, foundPackage){
        if (err){
            console.log(err)
        } else if (foundPackage === null || foundPackage === undefined) {
            res.redirect("/selectPackage") 
        } else {
            //Get the askedaboutMacro status
            User.find({_id: req.user._id}, function(err, foundUser){
                if (err){
                    console.log(err)
                } else {
                    const askedAboutMacro = foundUser[0].askedAboutMacro
                    
                    const phase = req.user.phases[functions.packagesToPhasesIndex(foundPackage.url)]

                    Exercise.find({userId: req.user._id, phase: phase}).limit(10).sort({date:-1}).exec(function(err, foundExercise){
                        //get the last date for all
                        let nextDayArray
                        //take care of if this is the first time doing workouts with this package 
                        let numberOfWorkouts
                        if (foundExercise[0] === null || foundExercise[0] === undefined){
                            nextDayArray = ["A", 0]
                            nextDayLastDate = null
                        } else {
                            const currentDay = foundExercise[0].workout
                            
                            let numberOfDaysOfPhase

                            console.log(currentDay)
                            let counterArray = []
                            foundPackage.workouts.forEach(function(workout, i){
                                if (workout.phase === phase){
                                    counterArray.push(1)
                                }
                            })
                            numberOfWorkouts = counterArray.length -1
                            console.log(numberOfWorkouts)
                            nextDayArray = functions.nextDay(currentDay,numberOfWorkouts)
                            console.log(nextDayArray)

                        }
                        res.render("dashboard", {package: foundPackage, user: req.user, functions: functions, numberOfWorkouts: numberOfWorkouts, nextDayArray: nextDayArray, askedAboutMacro: askedAboutMacro, success: req.flash('success'), error: req.flash('error')})
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