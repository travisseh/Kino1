const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const workouts = ["Standing Barbell Press", "Weighted Chin-ups", "Seated Cable Rows", "Triceps Rope Pushdown", "Lateral Raises", "Incline Barbell Bench Press", "Flat Dumbbell Bench Press", "Inclinde Dumbbell Curls", "Rope Hammer Curls", "Bent Over Flyes", "Bulgarian Split Squats", "Romanian Deadlifts", "Leg Extensions", "Hanging Weighted Knee Raises" ]

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: workouts
    },
    date: {
        type: Date,
        default: Date.now
    },
    warmUps: [
        {
            done: Boolean
        }
    ],
    sets: [
        {
            reps: Number,
            weight: Number
        }
    ]
})

const bodyWeightSchema = new mongoose.Schema ({
    weight: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

const packageSchema = new mongoose.Schema ({
    name: {
        type: String,
        enum: ["warrior_shredded", "aggressive_fat_loss", "greek_god", "greek_god_advanced", "superhero_bulking", "bodyweight_mastery", "kinobooty", "cardio_abs_mobility"]
    },
    active: {
        type: Boolean,
        required: true
    }
})

module.exports.Exercise = mongoose.model("Exercise", exerciseSchema)

module.exports.BodyWeight = mongoose.model("BodyWeight", bodyWeightSchema)

module.exports.Package = mongoose.model("Package", packageSchema)