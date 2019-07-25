const express = require("express")
const User = require("../models/model").User
const functions = require("../modules/functions")
const middleware = require("../middleware")
const settings = express.Router()
const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const moment = require('moment')


settings.get("/", middleware.isLoggedIn, middleware.hasAccess, function(req,res,next){
    const createdDate = req.user.createdDate
    const freeTrialLength = 7
    const daysLeft = functions.daysLeft(createdDate, freeTrialLength)

    stripe.customers.retrieve(
        req.user.stripe_id,
        function(err, customer) {
          if (err){
              console.log(err)
          }

          const endDateMilli = customer.subscriptions.data[0].current_period_end
          const endDate = functions.timeConverter(endDateMilli)
          const amount = customer.subscriptions.data[0].plan.amount/100
          const interval = customer.subscriptions.data[0].plan.interval

          res.render("settings", {user: req.user, endDate: endDate, amount: amount, interval:interval, daysLeft: daysLeft, functions: functions, success: req.flash('success'), error: req.flash('error')})
        }
      );
})

settings.post("/", middleware.isLoggedIn,function(req, res, next){
    let barWeight = req.body.barWeight
    const weightUnit = req.body.weightUnit
    if (weightUnit === "kgs"){
        barWeight = functions.round(functions.toLbs(barWeight), 1)
    }
    User.findOneAndUpdate({_id: req.user._id}, {barWeight: barWeight, weightUnit: weightUnit}, function(err,raw){
        if(err){
            console.log(err)
            req.flash("error", "There was a problem saving settings :(")
        } else {
            req.flash("success", "Settings Saved!")
            res.redirect("/settings")
        }
    })
})


module.exports = settings