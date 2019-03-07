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
                res.render("macroCalc", {weight: foundWeight.weight})
            } else {
                res.render("macroCalc", {weight: null})
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
    //show success messsage
    res.redirect("/macroCalc")
})

module.exports = router