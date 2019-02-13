const express = require("express")
const router = express.Router()

router.get("/", function(req, res, next){
    res.render("login")
})

router.post("/", function(req, res, next){
    res.redirect("/dashboard")
})

module.exports = router