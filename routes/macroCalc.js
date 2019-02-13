const express = require("express")
const router = express.Router()

router.get("/", function(req, res, next){
    res.render("macroCalc")
})

router.post("/", function(req, res, next){
    //save the new weight to the db
    //show success messsage
    res.redirect("/macroCalc")
})

module.exports = router