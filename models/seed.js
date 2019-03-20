const express = require("express")
const mongoose = require("mongoose")
const Exercise = require("./model").Exercise
const BodyWeight = require("./model").BodyWeight
const Package = require("./model").Package
const packages = require("../modules/storedWorkouts").packages
const Workout = require("./model").Workout
const TemplateExercise = require("./model").TemplateExercise
const TemplateWarmUp = require("./model").TemplateWarmUp
const TemplateSet = require("./model").TemplateSet
const goddess_toning = require("./packages/goddess_toning")
const createGodessToning = require("./packages/goddess_toning").createGodessToning
const warrior_shredded = require("./packages/warrior_shredded")
const createWarriorShredded = require("./packages/warrior_shredded").createWarriorShredded


const newBodyWeight = new BodyWeight ({
    weight: null
  })


//PACKAGES ARRAY
const packages_array = [warrior_shredded, goddess_toning]

// function seedDB(){
//     Exercise.collection.drop()
//     BodyWeight.collection.drop()
//     Package.collection.drop()
//     newBodyWeight.save()
//     Package.create(packages_array, function(err){
//         if (err){
//             console.log(err)
//         }
//     })
//     Exercise.create(warrior_shredded_array,function(err){
//     if (err) {
//         console.log(err)
//     }
//     })
//     Exercise.create(goddess_toning_array,function(err){
//         if (err) {
//             console.log(err)
//         }
//     })
// }

function seedPackages(){
    Package.collection.drop(function(err, result){
        if (err) {
            console.log (err)
        }
        if (result) {
            createGodessToning()
            createWarriorShredded()
        }
    })
}

// seedPackages()



module.exports = {seedPackages}
