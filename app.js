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
    res.redirect('/dashboard')
})

app.post('/payment/subscribed', bodyParser.raw({type: 'application/json'}), (request, response) => {
    let event;
  
    try {
      event = JSON.parse(request.body);
    }
    catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
    }
    User.updateOne({email: event.data.object.customer_email}, {subscribed: true}, function(err, result){
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
  
   console.log("email: ")
   console.log(event.data.object.customer_email)
  
    // Return a response to acknowledge receipt of the event
    response.json({received: true});
  });




// User.updateMany({}, {verifiedPackages: [true,true]}, function(err, result){
//     console.log(result)
//     User.findOne({email:"travppatset@gmail.com"}, function(err, foundUser){
//         console.log(foundUser)
//     })
// })

// app.get("*", function(req, res, next){
//   res.redirect("/")
// })

//PORT LISTENER
app.listen(process.env.PORT || port, function(){
    console.log(`listening on port ${port}`)
})