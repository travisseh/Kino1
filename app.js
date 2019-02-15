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
const seedDB = require("./models/seed")
const login = require("./routes/login")
const signup = require("./routes/signup")
const dashboard = require("./routes/dashboard")
const selectPackage = require("./routes/selectPackage")
const index = require("./routes/index")
const macroCalc = require("./routes/macroCalc")
const warrior_shredded = require("./modules/storedWorkouts").warrior_shredded
const _ = require("lodash")

//GLOBAL SETTINGS
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

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
  const package = req.params.package
  const workout = req.params.workout
  res.render("workout", {warrior_shredded: warrior_shredded})
})

app.get("*", function(req, res, next){
  res.redirect("/")
})





//PORT LISTENER
app.listen(port, function(){
    console.log(`listening on port ${port}`)
})