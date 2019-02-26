const express = require("express")
const Exercise = require("../models/model").Exercise
const Package = require("../models/model").Package
const functions = require("../modules/functions")
const workout = express.Router()
// const displaySetsCreator = require("../modules/functions").displaySetsCreator
// const determineSetIncrease = require("../modules/functions").determineSetIncrease
// const increaseWeight = require("../modules/functions").increaseWeight




workout.get("/:package/:workout", function(req, res, next){
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
            {$match: {packageUrl: packageUrl, workout: nameShort}},
            {$sort: {order: -1}},
            {$group: {_id: "$name", sets: {$last: "$sets"}}}
        ]).exec(function (err, foundExercises){
            if (err) {
                console.log(err)
            } else {
                const lastExercises = foundExercises
    
    //create displaySets from lastSets and templateSets
                    const displayExercises = []
                    for (let i = 0; i < exercises.length; i++){
                    let templateSets = exercises[i].sets
                    let lastSets = lastExercises[i].sets
                    global.displaySets = []
                    functions.displaySetsCreator(templateSets, lastSets)
                    displayExercises.push(displaySets)
                }

                res.render("workout", {exercises: exercises, lastExercises: lastExercises, displayExercises: displayExercises, packageUrl: packageUrl, workout: workout})
            }
        })
      }
    })
  })



  workout.post("/:package/:workout", function(req, res, next){
    const formReps = req.body.reps
    const formWeight = req.body.weight
    const order = req.body.order
    const sets = []
    functions.setsCreator(sets, formReps, formWeight)
    
    const newExercise = new Exercise ({
      name: req.body.exerciseName,
      sets: sets,
      order: order,
      templateExercise: [req.body.templateId],
      packageUrl: req.body.packageUrl,
      workout: req.body.workout
    })
    newExercise.save()
  
    res.redirect(`/workout/${req.params.package}/${req.params.workout}`)
  })

module.exports = workout