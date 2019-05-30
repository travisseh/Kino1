const express = require("express")
const User = require("../models/model").User
const middleware = require("../middleware")
const settings = express.Router()

settings.get("/", middleware.isLoggedIn, middleware.hasAccess, function(req,res,next){
    res.render("settings", {user: req.user, success: req.flash('success'), error: req.flash('error')})
})

settings.post("/", middleware.isLoggedIn,function(req, res, next){
    const barWeight = req.body.barWeight
    User.findOneAndUpdate({_id: req.user._id}, {barWeight: barWeight}, function(err,raw){
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