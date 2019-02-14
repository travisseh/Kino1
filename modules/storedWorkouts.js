const express = require("express")


const warriorWorkouts = [{
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
            videoLink: "not found",
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
        }
    ]
}]





module.exports.warriorWorkouts = warriorWorkouts