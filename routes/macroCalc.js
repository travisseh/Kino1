const express = require("express")
const BodyWeight = require("../models/model").BodyWeight
const User = require("../models/model").User
const middleware = require("../middleware")
const router = express.Router()

router.get("/", middleware.isLoggedIn,function(req, res, next){
    BodyWeight.findOne({userId: req.user._id}).sort('-date').exec(function(err, foundWeight){
        const dismissCalTracks = req.user.dismissCalTracks
        if (err){
            console.log(err)
        } else {
            if (foundWeight != null) {
                res.render("macroCalc", {weight: foundWeight.weight, dismissCalTracks: dismissCalTracks, success: req.flash('success'), error: req.flash('error')})
            } else {
                res.render("macroCalc", {weight: null, success: req.flash('success'), error: req.flash('error')})
            }
        }
    })
})

router.post("/", middleware.isLoggedIn,function(req, res, next){
    const weight = req.body.weight
    const newBodyWeight = new BodyWeight ({
        weight: weight,
        userId: req.user._id
    })
    newBodyWeight.save()
    req.flash("success", "Weight saved!")
    res.redirect("/macroCalc")
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