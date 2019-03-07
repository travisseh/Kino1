const express = require("express")
const Package = require("../models/model").Package
const dashboard = express.Router()


dashboard.get("/", function(req, res,next){
    if(req.isAuthenticated()){
        if (req.user.selectedPackage === undefined){
            res.redirect("/selectPackage")
        } else {
        Package.findOne({_id: req.user.selectedPackage}, function(err, foundPackage){
            if (err){
                console.log(err)
            } else if (foundPackage === null) {
                res.redirect("/selectPackage")
            } else {
                res.render("dashboard", {package: foundPackage})
            }
        })
        }
    } else {
        res.redirect("/")
    }
})




module.exports = dashboard