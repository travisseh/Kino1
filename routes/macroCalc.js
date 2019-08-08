const express = require("express")
const BodyWeight = require("../models/model").BodyWeight
const GoalWeight = require("../models/model").GoalWeight
const User = require("../models/model").User
const middleware = require("../middleware")
const functions = require("../modules/functions")
const router = express.Router()

router.get("/", middleware.isLoggedIn, middleware.hasAccess, middleware.trialExpired, function(req, res, next){
    BodyWeight.findOne({userId: req.user._id}).sort('-date').exec(function(err, foundWeight){
        const dismissCalTracks = req.user.dismissCalTracks
        if (err){
            console.log(err)
        } else {
            GoalWeight.findOne({userId: req.user._id}).sort('-date').exec((err, foundGoalWeight)=>{
                if (err){
                    console.log(err)
                } else {
                    let weight = null
                    let goalWeight = null
                    if (foundWeight !== null){
                        weight = foundWeight.weight
                    }
                    if (foundGoalWeight !== null){
                        goalWeight = foundGoalWeight.weight
                    }
                    res.render("macroCalc", {user: req.user, functions: functions, weight: weight, goalWeight: goalWeight, dismissCalTracks: dismissCalTracks, success: req.flash('success'), error: req.flash('error')})
                }
            })
        }
    })
})

router.post("/", middleware.isLoggedIn,function(req, res, next){
    let weight = req.body.weight
    let goalWeight = req.body.goalWeight
    if (req.user.weightUnit === "kgs"){
        weight = functions.toLbs(weight)
        goalWeight = functions.toLbs(goalWeight)
    }
    const newBodyWeight = new BodyWeight ({
        weight: weight,
        userId: req.user._id
    })
    const newGoalBodyWeight = new GoalWeight ({
        weight: goalWeight,
        userId: req.user._id
    })
    newBodyWeight.save()
        .then(()=>{
            newGoalBodyWeight.save()
            .then(()=>{
                req.flash("success", "Weights saved!")
                res.redirect("/macroCalc")
            })
            .catch(()=>{
                console.log("error saving goalWeight")
                req.flash("error", "There was an error saving goal weight :(")
                res.redirect("/macroCalc")
            })
        })
        .catch(()=>{
            console.log("error saving bodyWeight")
            req.flash("error", "There was an error saving bodyweight :(")
            res.redirect("/macroCalc")
        })
})

//Update askedAboutMacro Status
router.post("/dismissCalTracks", middleware.isLoggedIn, function(req, res, next){
    User.updateOne({_id: req.user._id}, {dismissCalTracks: true}, function(err, raw){
        if (err){
            console.log(err)
        } else {
            res.send(raw)
        }
    })
})

module.exports = router