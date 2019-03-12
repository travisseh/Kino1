const express = require("express")
const Exercise = require("../models/model").Exercise
const Package = require("../models/model").Package
const functions = require("../modules/functions")
const middleware = require("../middleware")
const fakeLastExercise = require("../modules/objects").fakeLastExercise
const fakeLastExercises = require("../modules/objects").fakeLastExercises
const workout = express.Router()




workout.get("/:package/:workout", middleware.isLoggedIn, function(req, res, next){
    //get each list of templatesets
  const packageUrl = req.params.package
  const nameShort = req.params.workout
  Package.findOne({url: packageUrl}, {workouts: {$elemMatch: {nameShort: nameShort}}}, function(err, foundPackage){
    if (err) {
      console.log(err)
    } else {
      const exercises = JSON.parse(JSON.stringify(foundPackage.workouts[0].exercises))
      const workout = JSON.parse(JSON.stringify(foundPackage.workouts[0]))
      
  //get each list of lastsets
      Exercise.aggregate([
          {$match: {userId: req.user._id, packageUrl: packageUrl, workout: nameShort}},
          {$group: {_id: {order: "$order", name: "$name"}, sets: {$last: "$sets"}}},
          {$sort: {"_id.order" : 1}}
      ]).exec(function (err, foundExercises){
          if (err) {
              console.log(err)
          } else {
              let lastExercises = []
              if (foundExercises.length != exercises.length){
                functions.fillExercises(lastExercises,exercises,foundExercises,fakeLastExercise)
              } else {
                lastExercises = foundExercises}

  //create displaySets from lastSets and templateSets
                  const displayExercises = []

                  for (let i = 0; i < exercises.length; i++){
                    let templateSets = exercises[i].sets
                    let lastSets = lastExercises[i].sets
                    let type = exercises[i].type
                    let weightIncrement = exercises[i].weightIncrement
                    global.displaySets = []

                    functions.displaySetsCreator(templateSets, lastSets, type, weightIncrement)
                    displayExercises.push(displaySets)
                  }

                  //render the page with all the above info
                  res.render("workout", {exercises: exercises, lastExercises: lastExercises, displayExercises: displayExercises, packageUrl: packageUrl, workout: workout, functions: functions})
          }
      })
    }
  })
    
  })



  workout.post("/:package/:workout", middleware.isLoggedIn, function(req, res, next){
    const formReps = req.body.reps
    const formWeight = req.body.weight
    const formNotes = req.body.note
    const order = req.body.order
    const sets = []
    functions.setsCreator(sets, formReps, formWeight, formNotes)
    
    const newExercise = new Exercise ({
      name: req.body.exerciseName,
      sets: sets,
      order: order,
      templateExercise: [req.body.templateId],
      packageUrl: req.body.packageUrl,
      workout: req.body.workout,
      userId: req.user._id
    })
    newExercise.save()
  
    res.redirect(`/workout/${req.params.package}/${req.params.workout}`)
  })

module.exports = workout