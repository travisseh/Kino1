const express = require("express")
const router = express.Router()

router.get("/", function(req, res, next){
    res.render("signup")
})

router.post("/", function(req, res, next){
    res.redirect("/dashboard")
})

module.exports = router