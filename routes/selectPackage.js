const express = require("express")
const Package = require("../models/model").Package
const User = require("../models/model").User
const middleware = require("../middleware")
const selectPackage = express.Router()

selectPackage.get("/", middleware.isLoggedIn, middleware.hasAccess, middleware.trialExpired, function(req,res,next){
        Package.find({}, function(err, foundPackages){
            if (err) {
                console.log(err)
            } else {
                User.findOne({_id: req.user._id}, function (err, foundUser){
                    if (err){
                        console.log(err)
                    } else {
                        res.render("selectPackage", {ajaxUrl:process.env.AJAX_URL, packages: foundPackages, user: req.user, success: req.flash('success'), error: req.flash('error')})
                    }
                })
            }
        })

})

selectPackage.post("/", middleware.isLoggedIn,function(req, res, next){
    //return modal that asks for the product number from their receipt - if it hasn't been entered yet
    //flash success message
    const package_id = req.body.package_id
    const package_name = req.body.packageName
    console.log("package name: " + package_name)
    User.findOneAndUpdate({_id: req.user._id}, {selectedPackage: package_id, packageName: package_name}, function(err,raw){
        if(err){
            console.log(err)
        } else {
            res.redirect("/dashboard")
        }
    })
})


module.exports = selectPackage