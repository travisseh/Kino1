//IMPORTS
    //Express Basics
require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
var cors = require('cors')
const app = express()
const port = 8000
const path = require("path")
const flash = require('connect-flash')
const functions = require('./modules/functions')

    //DB
const mongoose = require("mongoose")
const seedPackages = require("./models/seed").seedPackages
const User = require('./models/model').User

    //Auth
const session = require('express-session')
const passport = require("passport")

    //Route Handlers
const auth = require("./routes/auth")
const logout = require("./routes/logout")
const dashboard = require("./routes/dashboard")
const selectPackage = require("./routes/selectPackage")
const index = require("./routes/index")
const macroCalc = require("./routes/macroCalc")
const workout = require("./routes/workout")
const closedSignup = require("./routes/closedSignup")
const settings = require("./routes/settings")
const verify = require("./routes/verify")
const payment = require("./routes/payment")
const subscribe = require("./routes/subscribe")
const changePhase = require('./routes/changePhase')
const changeProtocol = require('./routes/changeProtocol')

// DB CONNECTION
mongoose.connect(process.env.DB_PATH, {useNewUrlParser: true})
// seedPackages()

//GLOBAL SETTINGS
// app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }))
app.use(express.static(path.join(__dirname, "public"), { maxAge: 3 }))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cors())
app.use(flash())
app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
mongoose.set("useCreateIndex", true)
app.use(function(req, res, next) {
    res.locals.AMPLITUDE_API = process.env.AMPLITUDE_API;
    next();
});


//ROUTES
app.use("/", index)
app.use("/dashboard", dashboard)
app.use("/settings", settings)
app.use("/selectPackage", selectPackage)
app.use("/macrocalc", macroCalc)
app.use("/workout", workout)
app.use("/closedSignup", closedSignup)
app.use("/auth/google", auth)
app.use("/logout", logout)
app.use("/verify", verify)
// app.use("/payment", payment)
app.use("/subscribe", subscribe)
app.use("/changePhase", changePhase)
app.use("/changeProtocol", changeProtocol)

app.get("/dashTest", function(req, res, next){
    const error = req.flash("error")
    const success = req.flash("success")
    res.render("dashTest", {success: success, error: error})
})

app.get("/test", function(req, res, next){
    const error = req.flash("error")
    const success = req.flash("success")
    res.render("test", {success: success, error: error})
})

app.get('/success', (req, res) =>{
    req.flash('success', "You've successfully subscribed!")    
    res.redirect('/dashboard')
})

//Stripe Stuff
const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const endpointSecret = process.env.STRIPE_SUBSCRIBE_SECRET;

app.post('/payment/subscribed', bodyParser.raw({type: 'application/json'}), (request, response) => {
    const sig = request.headers['stripe-signature'];
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    }
    catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
    }
    User.updateOne({email: event.data.object.customer_email}, {subscribed: true, stripe_id: event.data.object.customer, stripe_subscription_id: event.data.object.subscription, canceled: false}, function(err, result){
        if (err) {
            console.log(err)
            response.status(500).send(`Server Error: ${err.message}`);
        } else {
            console.log(result)
        }
    })
    response.json({received: true});
  });

  const cancelSecret = process.env.STRIPE_CANCEL_SECRET;
app.post('/payment/canceled', bodyParser.raw({type: 'application/json'}), (request, response) => {
    const sig = request.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(request.body, sig, cancelSecret);
    }
    catch (err) {
        response.status(400).send(`Webhook Error: ${err.message}`);
    }
    User.updateOne({stripe_id: event.data.object.customer}, {subscribed: false}, function(err, result){
        if (err) {
            console.log(err)
            response.status(500).send(`Server Error: ${err.message}`);
        } else {
            console.log(result)
        }
    })
    response.json({received: true});
});


app.post('/cancel', (req, res, next) => {
    stripe.subscriptions.update(req.user.stripe_subscription_id, {cancel_at_period_end: true});
    User.updateOne({email: req.user.email},{canceled:true}, (err, result)=>{
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
    req.flash('success', 'Subscription canceled')
    res.redirect('/settings')
})

app.post('/resubscribe', (req, res, next) => {
    stripe.subscriptions.update(req.user.stripe_subscription_id, {cancel_at_period_end: false});
    User.updateOne({email: req.user.email}, {canceled: false}, (err, result)=>{
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
    req.flash('success', "You've successfully re-subscribed!")
    res.redirect('/settings')
})

//   stripe.customers.list(
//     {email:'travppatset@gmail.com'},
//     function(err, customer) {
//       console.log(customer)
//       console.log(customer.data[0])
//     }
//   );


// app.get("*", function(req, res, next){
//   res.redirect("/")
// })

//PORT LISTENER
app.listen(process.env.PORT || port, function(){
    console.log(`listening on port ${port}`)
})