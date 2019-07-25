const express = require("express")
const Exercise = require("../models/model").Exercise
const Package = require("../models/model").Package
const functions = require("../modules/functions")
const middleware = require("../middleware")
const fakeLastExercise = require("../modules/objects").fakeLastExercise
const exercise = require('./exercise')
const workout = express.Router()


workout.get("/:package/:workout/:phase", middleware.isLoggedIn, middleware.trialExpired, function(req, res, next){
    //get each list of templatesets
  const packageUrl = req.params.package
  const nameShort = req.params.workout
  let phase = req.params.phase
  Package.findOne({url: packageUrl}, {workouts: {$elemMatch: {nameShort: nameShort, phase: phase}}}, function(err, foundPackage){
    if (err) {
      console.log(err)
    } else {
      const exercises = JSON.parse(JSON.stringify(foundPackage.workouts[0].exercises))
      const workout = JSON.parse(JSON.stringify(foundPackage.workouts[0]))
  
  //create array of exercise names to include in Exercise query below
  const nameArray = []
  exercises.forEach(function(exercise, i){
    nameArray.push(exercise.name)
  })

  //get each list of lastsets
      Exercise.aggregate([
          {$match: {userId: req.user._id, packageUrl: packageUrl, name: {$in: nameArray}}},
          {$group: {_id: {order: "$order", name: "$name"}, sets: {$last: "$sets"}, lastId: {$last: "$_id"}}},
          {$sort: {"lastId": -1}}
      ]).exec(function (err, foundExercises){
          if (err) {
              console.log(err)
          } else {
            //create lastExercises from foundExercises and make sure it's order is the same as exercises
              let lastExercises = []
              let nameIndex = []
              foundExercises.forEach(function(foundExercise,i){
                nameIndex.push(foundExercise._id.name)
              })
              exercises.forEach(function(exercise, i){
                const index = nameIndex.indexOf(exercise.name)
                if (index === -1){
                  lastExercises.push(fakeLastExercise)
                } else {
                  lastExercises.push(foundExercises[index])
                }
              })
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
                  res.render("workout", {success: req.flash('success'), error: req.flash('error'), exercises: exercises, user: req.user, functions: functions, lastExercises: lastExercises, displayExercises: displayExercises, packageUrl: packageUrl, workout: workout, functions: functions})
          }
      })
    }
  })
    
  })




  //create route
  workout.post("/:package/:workout", middleware.isLoggedIn, function(req, res, next){
    const formReps = req.body.reps
    let formWeight = req.body.weight
    if (req.user.weightUnit === "kgs"){
      formWeight = formWeight.map(functions.toLbs)
    }
    const formNotes = req.body.note
    const order = req.body.order
    const step = req.body.step
    const phase = req.body.phase
    const isFirstTime = req.body.isFirstTime
    const sets = []
    const newFirstWeight = formWeight[0] - step
    if (isFirstTime === 'true'){
      formWeight.splice(0, 1, newFirstWeight)
    }
    functions.setsCreator(sets, formReps, formWeight, formNotes)
    
    const newExercise = new Exercise ({
      name: req.body.exerciseName,
      sets: sets,
      phase: phase,
      order: order,
      templateExercise: [req.body.templateId],
      packageUrl: req.body.packageUrl,
      workout: req.body.workout,
      userId: req.user._id,
      isSetCreator: req.body.isSetCreator
    })
    newExercise.save()
    if (isFirstTime === 'true'){
      req.flash('success', 'Sets Created! You can now begin this exercise')
    } else {
      req.flash('success', 'Exercise Saved!')
    }
    res.redirect(`/workout/${req.params.package}/${req.params.workout}/${phase}`)
  })

  //Edit route
  workout.post("/:package/:workout/edit", function (req, res, next){
    const formReps = req.body.reps
    let formWeight = req.body.weight
    if (req.user.weightUnit === "kgs"){
      formWeight = formWeight.map(functions.toLbs)
    }
    const formNotes = req.body.note
    const order = req.body.order
    const step = req.body.step
    const isFirstTime = req.body.isFirstTime
    const sets = []
    const newFirstWeight = formWeight[0] - step
    if (isFirstTime === 'true'){
      formWeight.splice(0, 1, newFirstWeight)
    }
    functions.setsCreator(sets, formReps, formWeight, formNotes)
    
    lastId = req.body.lastId
    Exercise.findOne({_id: lastId}, function(err, foundExercise){
      if (err) {
        console.log(err)
      } else {
        foundExercise.sets = sets
        foundExercise.order = order
        foundExercise.save(function(err){
          if (err) {
            console.log(err)
          } else {
            req.flash('success', 'Edits Saved!')
            res.redirect(`/workout/${req.params.package}/${req.params.workout}/${req.body.phase}`)
          }
        })
      }
    })
  })


  workout.use("/:package/:workout/exercise", function(req, res, next){
    req.workout = req.params.workout
    req.package = req.params.package
    next()
  }, exercise)


module.exports = workout