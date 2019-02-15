const express = require("express")
const mongoose = require("mongoose")
const Exercise = require("./model").Exercise
const BodyWeight = require("./model").BodyWeight
const Package = require("./model").Package
const packages = require("../modules/storedWorkouts").packages


const newBodyWeight = new BodyWeight ({
    weight: null
  })
  
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
  


function packageCreator(packagesArray){
packagesArray.forEach(function(package){
    Package.create({name: package, active: false})
})
}

function seedDB(){
  Exercise.collection.drop()
  BodyWeight.collection.drop()
  Package.collection.drop()
  packageCreator(packages)
  newExercise.save()
  newBodyWeight.save()
}

module.exports = seedDB
