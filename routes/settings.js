const express = require("express")
const User = require("../models/model").User
const functions = require("../modules/functions")
const middleware = require("../middleware")
const settings = express.Router()
const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const moment = require('moment')


settings.get("/", middleware.isLoggedIn, middleware.hasAccess, function(req,res,next){
    const oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    const createdDate = req.user.createdDate
    const today = Date.now()
    const daysSinceCreated = Math.floor(Math.abs((createdDate.getTime() - today)/(oneDay)));
    const freeTrialLength = 7
    const daysLeft = freeTrialLength - daysSinceCreated

    stripe.customers.retrieve(
        req.user.stripe_id,
        function(err, customer) {
          if (err){
              console.log(err)
          }
          const endDateMilli = customer.subscriptions.data[0].current_period_end

        function timeConverter(UNIX_timestamp){
            var a = new Date(UNIX_timestamp * 1000);
            var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            const suffixes = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th']
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var day = days[a.getDay()];
            var date = a.getDate();
            const arrayDate = date.toString().split("").map(Number)
            const selectedNumberFromDate = arrayDate.length -1
            const dateSuffix = suffixes[arrayDate[selectedNumberFromDate] -1]
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var time = `${day} ${month} ${date}${dateSuffix}, ${year}`
            return time;
          }
          const endDate = timeConverter(endDateMilli)
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