//IMPORTS
    //Express Basics
require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser");
const ejs = require("ejs")
const app = express()
const port = 8080
const path = require("path")

    //DB
const mongoose = require("mongoose")

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

// DB CONNECTION
mongoose.connect(process.env.DB_PATH, {useNewUrlParser: true})

//GLOBAL SETTINGS
app.use(express.static(path.join(__dirname, "public")))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
mongoose.set("useCreateIndex", true)


//ROUTES
app.use("/", index)
app.use("/dashboard", dashboard)
app.use("/selectPackage", selectPackage)
app.use("/macrocalc", macroCalc)
app.use("/workout", workout)
app.use("/auth/google", auth)
app.use("/logout", logout)

app.get("/test", function(req, res, next){
    res.render("test")
})


// app.get("*", function(req, res, next){
//   res.redirect("/")
// })

//PORT LISTENER
app.listen(process.env.PORT || port, function(){
    console.log(`listening on port ${port}`)
})