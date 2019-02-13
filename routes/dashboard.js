const express = require("express")
const router = express.Router()


router.get("/", function(req, res,next){
    //check to see if logged in
    //check to see if has a package selected
    res.render("dashboard")
})



module.exports = router