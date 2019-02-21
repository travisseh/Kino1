//IMPORTS
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
const Exercise = require("./models/model").Exercise
const BodyWeight = require("./models/model").BodyWeight
const Package = require("./models/model").Package
const Workout = require("./models/model").Workout
const TemplateExercise = require("./models/model").TemplateExercise
const TemplateWarmUp = require("./models/model").TemplateWarmUp
const TemplateSet = require("./models/model").TemplateSet
const seedDB = require("./models/seed")
const login = require("./routes/login")
const signup = require("./routes/signup")
const dashboard = require("./routes/dashboard")
const selectPackage = require("./routes/selectPackage")
const index = require("./routes/index")
const macroCalc = require("./routes/macroCalc")
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

//SEED DB
// seedDB()

//ROUTES
app.use("/", index)
app.use("/dashboard", dashboard)
app.use("/selectPackage", selectPackage)
app.use("/login", login)
app.use("/signup", signup)
app.use("/macrocalc", macroCalc)

app.get("/:package/:workout", function(req, res, next){
  //get the package and then get the workout
  //get each list of templatesets
  //get each list of lastsets
  Exercise.find
  //return true or false about if they should increase weight
  //perform logic to get displaysets
  const displaySets = []
  res.render("workout", {warrior_shredded: warrior_shredded.workouts, warrior_shredded2: warrior_shredded, functions: functions})
})

app.post("/:package/:workout", function(req, res, next){
  const formReps = req.body.reps
  const formWeight = req.body.weight
  const sets = []
  setsCreator(sets, formReps, formWeight)
  
  const newExercise = new Exercise ({
    name: req.body.exerciseName,
    sets: sets
  })
  newExercise.save()

  res.redirect(`/${req.params.package}/${req.params.workout}`)
})

app.get("*", function(req, res, next){
  res.redirect("/")
})





//PORT LISTENER
app.listen(port, function(){
    console.log(`listening on port ${port}`)
})