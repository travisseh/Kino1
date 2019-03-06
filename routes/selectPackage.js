const express = require("express")
const Package = require("../models/model").Package
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
    Package.updateMany({active: false}, function(err, result){
        if (err) {
            console.log(err)
        } else {
            Package.updateOne({_id: package_id}, {active: true}, function(err, raw){
                res.redirect("/dashboard")
            })
        }
    })
})


module.exports = selectPackage