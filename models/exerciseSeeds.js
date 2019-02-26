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



const incline_barbell_bench_press = new Exercise ({
    name: "Incline Barbell Bench Press",
    sets: [
        {
            reps: null,
            weight: null
        },
        {
            reps: null,
            weight: null
        },
        {
            reps: null,
            weight: null
        }
    ],
    order: 0,
    packageUrl: "warrior_shredded",
    workout: "A"
  })

const flat_dumbbell_bench_press = new Exercise ({
    name: "Flat Dumbbell Bench Press",
    sets: [
        {
            reps: null,
            weight: null
        },
        {
            reps: null,
            weight: null
        }
    ],
    order: 1,
    packageUrl: "warrior_shredded",
    workout: "A"
  })

const incline_dumbbell_curls = new Exercise ({
    name: "Incline Dumbbell Curls",
    sets: [
        {
            reps: null,
            weight: null
        },
        {
            reps: null,
            weight: null
        },
        {
            reps: null,
            weight: null
        }
    ],
    order: 2,
    packageUrl: "warrior_shredded",
    workout: "A"
  })

const rope_hammer_curls = new Exercise ({
    name: "Rope Hammer Curls",
    sets: [
        {
            reps: null,
            weight: null
        },
        {
            reps: null,
            weight: null
        }
    ],
    order: 3,
    packageUrl: "warrior_shredded",
    workout: "A"
  })

const bent_over_flyes = new Exercise ({
    name: "Bent Over Flyes",
    sets: [
        {
            reps: null,
            weight: null
        },
        {
            reps: null,
            weight: null
        },
        {
            reps: null,
            weight: null
        },
        {
            reps: null,
            weight: null
        }
    ],
    order: 4,
    packageUrl: "warrior_shredded",
    workout: "A"
  })

incline_barbell_bench_press.save(function(err){
    if (err) {
        console.log(err)
    }
})
flat_dumbbell_bench_press.save(function(err){
    if (err) {
        console.log(err)
    }
})
incline_dumbbell_curls.save(function(err){
    if (err) {
        console.log(err)
    }
})
rope_hammer_curls.save(function(err){
    if (err) {
        console.log(err)
    }
})
bent_over_flyes.save()
