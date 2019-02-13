const express = require("express")
const router = express.Router()

router.get("/", function(req,res,next){
    //check if logged in
    res.render("selectPackage")
})

router.post("/", function(req, res, next){
    //return modal that asks for the product number from their receipt - if it hasn't been entered yet
    //flash success message
    res.redirect("/dashboard")
})


module.exports = router