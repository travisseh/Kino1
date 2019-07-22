const express = require("express")
const middleware = require("../middleware")
const router = express.Router()


router.get('/', middleware.isLoggedIn, function(req, res, next){
    const error = req.flash("error")
    const success = req.flash("success")
    res.render("subscribe", {success: success, error: error, user:req.user})
})

module.exports = router