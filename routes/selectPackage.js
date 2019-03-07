const express = require("express")
const Package = require("../models/model").Package
const User = require("../models/model").User
const middleware = require("../middleware")
const selectPackage = express.Router()

selectPackage.get("/", middleware.isLoggedIn,function(req,res,next){
        Package.find({}, function(err, foundPackages){
            if (err) {
                console.log(err)
            } else {
                res.render("selectPackage", {packages: foundPackages})
            }
        })

})

selectPackage.post("/", middleware.isLoggedIn,function(req, res, next){
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