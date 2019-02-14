const express = require("express")
const mongoose = require("mongoose")
const Exercise = require("./model").Exercise
const BodyWeight = require("./model").BodyWeight
const Package = require("./model").Package


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
  
const packages = ["warrior_shredded", "aggressive_fat_loss", "greek_god", "greek_god_advanced", "superhero_bulking", "bodyweight_mastery", "kinobooty", "cardio_abs_mobility"]

function packageCreator(packagesArray){
packagesArray.forEach(function(package){
    Package.create({name: package})
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
