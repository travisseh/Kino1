const express = require("express")
const Exercise = require("../models/model").Exercise
const BodyWeight = require("../models/model").BodyWeight
const Package = require("../models/model").Package
const Workout = require("../models/model").Workout
const TemplateExercise = require("../models/model").TemplateExercise
const TemplateWarmUp = require("../models/model").TemplateWarmUp
const TemplateSet = require("../models/model").TemplateSet
const _ = require("lodash")
const setsCreator = require("../modules/functions").setsCreator
const functions = require("../modules/functions")
const workout = express.Router()


workout.get("/:package/:workout", function(req, res, next){
    //get the package and then get the workout
    //get each list of templatesets
    const packageUrl = req.params.package
    const workout = req.params.workout
  
    Package.findOne({url: packageUrl}, {workouts: {$elemMatch: {nameShort: workout}}}, function(err, foundPackage){
      if (err) {
        console.log(err)
      } else {
        const exercises = JSON.parse(JSON.stringify(foundPackage.workouts[0].exercises))
        const workout = JSON.parse(JSON.stringify(foundPackage.workouts[0]))
        //get each list of lastsets
        Exercise.distinct("name", function(err, names){
          if (err) {
            console.log(err)
          } else {
            console.log(names)
            res.render("workout", {exercises: exercises, packageUrl: packageUrl, workout: workout})
          }
        })
        //calculate display sets
      }
    })
  })

  workout.post("/:package/:workout", function(req, res, next){
    const formReps = req.body.reps
    const formWeight = req.body.weight
    const sets = []
    setsCreator(sets, formReps, formWeight)
    
    const newExercise = new Exercise ({
      name: req.body.exerciseName,
      sets: sets,
      templateExercise: [req.body.templateId],
      packageUrl: req.body.packageUrl,
      workout: req.body.workout
    })
    newExercise.save()
  
    res.redirect(`/workout/${req.params.package}/${req.params.workout}`)
  })

module.exports = workout