const express = require("express")
const selectPackage = express.Router()

selectPackage.get("/", function(req,res,next){
    //check if logged in
    // check for and render different package names

    res.render("selectPackage")
})

selectPackage.post("/", function(req, res, next){
    //return modal that asks for the product number from their receipt - if it hasn't been entered yet
    //flash success message
    res.redirect("/dashboard")
})


module.exports = selectPackage