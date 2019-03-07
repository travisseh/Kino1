const express = require("express")
const Package = require("../models/model").Package
const User = require("../models/model").User
const selectPackage = express.Router()

selectPackage.get("/", function(req,res,next){
    if(req.isAuthenticated()){
        Package.find({}, function(err, foundPackages){
            if (err) {
                console.log(err)
            } else {
                res.render("selectPackage", {packages: foundPackages})
            }
        })
    } else {
        res.redirect("/")
    }
    
})

selectPackage.post("/", function(req, res, next){
    //return modal that asks for the product number from their receipt - if it hasn't been entered yet
    //flash success message
    const package_id = req.body.package_id
    User.findOneAndUpdate({_id: req.user._id}, {selectedPackage: package_id}, function(err,raw){
        if(err){
            console.log(err)
        } else {
            res.redirect("/dashboard")
        }
    })
})


module.exports = selectPackage