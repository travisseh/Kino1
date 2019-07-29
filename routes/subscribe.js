const express = require("express")
const middleware = require("../middleware")
const router = express.Router()


router.get('/', middleware.isLoggedIn, function(req, res, next){
    const error = req.flash("error")
    const success = req.flash("success")
    const stripePublicKey = process.env.STRIPE_PUBLIC_KEY
    const stripeMonthlyPlan = process.env.STRIPE_MONTHLY_PLAN
    const stripeAnnualPlan = process.env.STRIPE_ANNUAL_PLAN
    res.render("subscribe", {success: success, error: error, user:req.user, stripePublicKey: stripePublicKey, stripeMonthlyPlan: stripeMonthlyPlan, stripeAnnualPlan: stripeAnnualPlan, ajaxUrl: process.env.AJAX_URL})
})

module.exports = router