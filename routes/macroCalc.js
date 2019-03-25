const express = require("express")
const BodyWeight = require("../models/model").BodyWeight
const middleware = require("../middleware")
const router = express.Router()

router.get("/", middleware.isLoggedIn,function(req, res, next){
    BodyWeight.findOne({userId: req.user._id}).sort('-date').exec(function(err, foundWeight){
        if (err){
            console.log(err)
        } else {
            if (foundWeight != null) {
                res.render("macroCalc", {weight: foundWeight.weight, success: req.flash('success'), error: req.flash('error')})
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

module.exports = router