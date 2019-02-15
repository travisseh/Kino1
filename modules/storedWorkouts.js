const express = require("express")


const packages = ["warrior_shredded", "aggressive_fat_loss", "greek_god", "greek_god_advanced", "superhero_bulking", "bodyweight_mastery", "kinobooty", "cardio_abs_mobility"]


const warrior_shredded = [{
    name: "A: Chest and Shoulder",
    nameShort: "A",
    image: "https://source.unsplash.com/dMWL8V7L8G4",
    description: "5 workouts to strengthen chest and shoulders.",
    duration: 60,
    url: "/warriorshredded/a",
    exercises: [
        {
            name: "Incline Barbell Bench Press",
            videoLink: "https://my.kinobody.com/courses/66901/lectures/5059620",
            warmUps: [
                {
                    percent: 60,
                    reps: 5
                },
                {
                    percent: 80,
                    reps: 3
                }
            ],
            sets: [
            {
                low: 5,
                high: 6
            },
            {
                low: 6,
                high: 7
            }
        ]
        },
        {
            name: "Flat Dumbbell Bench Press",
            videoLink: "https://my.kinobody.com/courses/108654/lectures/1589076",
            warmUps: [],
            sets: [
                {
                    low: 8,
                    high: 10
                },
                {
                    low: 10,
                    high: 12
                },
                {
                    low: 10,
                    high: 12
                }
            ]
        },
        {
            name: "Incline Dumbbell Curls",
            videoLink: "https://my.kinobody.com/courses/108654/lectures/1589113",
            warmUps: [
                {
                    percent: 50,
                    reps: 8
                }
            ],
            sets: [
                {
                    low: 6,
                    high: 8
                },
                {
                    low: 6,
                    high: 8
                },
                {
                    low: 6,
                    high: 8
                }
            ]
        },
        {
            name: "Rope Hammer Curls",
            videoLink: "NULL",
            warmUps: [],
            sets: [
                {
                    low: 8,
                    high: 10
                },
                {
                    low: 10,
                    high: 12
                }
            ]
        },
        {
            name: "Bent Over Flyes",
            videoLink: "https://my.kinobody.com/courses/108654/lectures/1589088",
            warmUps: [],
            sets: [
                {
                    low: 12,
                    high: 15
                },
                {
                    low: 4,
                    high: 6
                },
                {
                    low: 4,
                    high: 6
                },
                {
                    low: 4,
                    high: 6
                }
            ]
        }
    ]
}]





module.exports.warrior_shredded = warrior_shredded
module.exports.packages = packages