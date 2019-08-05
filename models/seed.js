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
const createGoddessToning = require("./packages/goddess_toning").createGoddessToning
const warrior_shredded = require("./packages/warrior_shredded")
const createWarriorShredded = require("./packages/warrior_shredded").createWarriorShredded
const createGreekGod = require("./packages/greek_god").createGreekGod
const greek_god = require("./packages/greek_god")
const createAFL = require("./packages/aggressive_fat_loss_").createAFL
const aggressive_fat_loss = require("./packages/aggressive_fat_loss_").aggressive_fat_loss


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
    Package.find({}, function(err, foundPackages){
        if (err){
            console.log(err)
        } else {
            if (foundPackages.length > 0){
                Package.collection.drop(function(err, result){
                    if (err) {
                        console.log (err)
                    }
                    if (result) {
                        createGoddessToning()
                        createWarriorShredded()
                        createAFL()
                        createGreekGod()
                    }
                })
            } else {
                createGoddessToning()
                createWarriorShredded()
                createAFL()
                createGreekGod()
            }
        }
    })
    
}

// seedPackages()



module.exports = {seedPackages}
