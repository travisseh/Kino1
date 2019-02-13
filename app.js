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
const Exercise = require("./model").Exercise
const BodyWeight = require("./model").BodyWeight
const login = require("./routes/login")
const signup = require("./routes/signup")
const dashboard = require("./routes/dashboard")
const selectPackage = require("./routes/selectPackage")
const index = require("./routes/index")
// const dynamicWorkouts = require("./routes/:workout")
const weightCalc = require("./routes/weightCalc")

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/Kino1", {useNewUrlParser: true})

const newBodyWeight = new BodyWeight ({
  weight: 148
})

// newBodyWeight.save()

const newExercise = new Exercise ({
  name: "Triceps Rope Pushdown",
  warmUps: [
      {
          done: true
      },
      {
          done: true
      }
  ],
  sets: [
      {
          reps: 10,
          weight: 58
      },
      {
        reps: 10,
        weight: 52
      },
      {
        reps: 11,
        weight: 45
      }
  ]
})

// newExercise.save()

app.use("/", index)
app.use("/dashboard", dashboard)
app.use("/selectPackage", selectPackage)
app.use("/login", login)
app.use("/signup", signup)
app.use("/weightCalc", weightCalc)

//dynamic routes
app.get("/:workout", function(req, res, next){
  res.send(`Here the ${req.params.workout} page will be rendered`)
})


app.listen(port, function(){
    console.log(`listening on port ${port}`)
})