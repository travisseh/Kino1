const express = require("express")
const BodyWeight = require("../models/model").BodyWeight
const router = express.Router()

router.get("/", function(req, res, next){
    BodyWeight.findOne({}).sort('-date').exec(function(err, foundWeight){
        if (err){
            console.log(err)
        } else {
            res.render("macroCalc", {weight: foundWeight.weight})
        }
    })
})

router.post("/", function(req, res, next){
    const weight = req.body.weight
    const newBodyWeight = new BodyWeight ({
        weight: weight
    })
    newBodyWeight.save()
    //show success messsage
    res.redirect("/macroCalc")
})

module.exports = router