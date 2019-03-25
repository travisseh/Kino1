const express = require("express")
const router = express.Router()


router.get("/", function(req, res,next){
    const error = req.flash("error")
    const success = req.flash("success")
    res.render("index", {success: success, error: error})
})



module.exports = router