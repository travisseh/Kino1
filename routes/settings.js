const express = require("express")
const User = require("../models/model").User
const functions = require("../modules/functions")
const middleware = require("../middleware")
const settings = express.Router()

settings.get("/", middleware.isLoggedIn, middleware.hasAccess, function(req,res,next){
    res.render("settings", {user: req.user, functions: functions, success: req.flash('success'), error: req.flash('error')})
})

settings.post("/", middleware.isLoggedIn,function(req, res, next){
    let barWeight = req.body.barWeight
    const weightUnit = req.body.weightUnit
    if (weightUnit === "kgs"){
        barWeight = functions.toLbs(barWeight)
    }
    User.findOneAndUpdate({_id: req.user._id}, {barWeight: barWeight, weightUnit: weightUnit}, function(err,raw){
        if(err){
            console.log(err)
            req.flash("error", "There was a problem saving settings :(")
        } else {
            req.flash("success", "Settings Saved!")
            res.redirect("/settings")
        }
    })
})


module.exports = settings