//IMPORTS
    //Basics
require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser");
const ejs = require("ejs")
const mongoose = require("mongoose")
const session = require('express-session')
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const app = express()
const port = 8080
    //Models
const Exercise = require("./models/model").Exercise
const BodyWeight = require("./models/model").BodyWeight
const Package = require("./models/model").Package
const Workout = require("./models/model").Workout
const TemplateExercise = require("./models/model").TemplateExercise
const TemplateWarmUp = require("./models/model").TemplateWarmUp
const TemplateSet = require("./models/model").TemplateSet
const seedDB = require("./models/seed")
    //Route Handlers
const login = require("./routes/login")
const signup = require("./routes/signup")
const dashboard = require("./routes/dashboard")
const selectPackage = require("./routes/selectPackage")
const index = require("./routes/index")
const macroCalc = require("./routes/macroCalc")
const workout = require("./routes/workout")
    //JS Functions
const warrior_shredded = require("./modules/storedWorkouts").warrior_shredded
const _ = require("lodash")
const setsCreator = require("./modules/functions").setsCreator
const functions = require("./modules/functions")

//GLOBAL SETTINGS
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}))

//DB CONNECTION
mongoose.connect("mongodb://localhost:27017/Kino1", {useNewUrlParser: true})

// mongoose.connect("mongodb+srv://admin-travisse:test123@cluster0-vd7zd.mongodb.net/Kino1", {useNewUrlParser: true})


//ROUTES
app.use("/", index)
app.use("/dashboard", dashboard)
app.use("/selectPackage", selectPackage)
app.use("/login", login)
app.use("/signup", signup)
app.use("/macrocalc", macroCalc)
app.use("/workout", workout)

app.get("*", function(req, res, next){
  res.redirect("/")
})


//PORT LISTENER
app.listen(process.env.PORT || port, function(){
    console.log(`listening on port ${port}`)
})