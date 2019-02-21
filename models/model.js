const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const workouts = ["Standing Barbell Press", "Weighted Chin-ups", "Seated Cable Rows", "Triceps Rope Pushdown", "Lateral Raises", "Incline Barbell Bench Press", "Flat Dumbbell Bench Press", "Inclinde Dumbbell Curls", "Rope Hammer Curls", "Bent Over Flyes", "Bulgarian Split Squats", "Romanian Deadlifts", "Leg Extensions", "Hanging Weighted Knee Raises" ]

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: workouts,
        required: true
    },
    workout: {
        type: String,
        enum: ["A", "B", "C"],
        required: true
    },
    package: {
        type: String,
        enum: []
    },
    date: {
        type: Date,
        default: Date.now
    },
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

const templateWarmUpsSchema = new mongoose.Schema({
    percent: Number,
    reps: Number
})

const templateSetsSchema = mongoose.Schema({
    low: Number,
    high: Number
})

const templateExerciseSchema = new mongoose.Schema({
    name: String,
    videoLink: String,
    instructions: String,
    type: {
        type: String,
        enum: ["Reverse Pyramid", "Standard Pyramid", "Rest Pause", "Hold"]
    },
    warmUps: [templateWarmUpsSchema],
    sets: [templateSetsSchema]
})

const workoutSchema = new mongoose.Schema ({
    name: String,
    nameShort: {
        type: String,
        enum: ["A", "B", "C", "D"]
    },
    image: String,
    description: String,
    duration: Number,
    exercises: [templateExerciseSchema]
})

const packageSchema = new mongoose.Schema ({
    name: String,
    url: String,
    active: {
        type: Boolean,
        required: true
    },
    purchased: {
        type: Boolean,
        required: true
    },
    workouts: [workoutSchema] 
})

module.exports.Exercise = mongoose.model("Exercise", exerciseSchema)

module.exports.BodyWeight = mongoose.model("BodyWeight", bodyWeightSchema)

module.exports.Package = mongoose.model("Package", packageSchema)

module.exports.Workout = mongoose.model("Workout", workoutSchema)

module.exports.TemplateExercise = mongoose.model("TemplateExercise", templateExerciseSchema)

module.exports.TemplateWarmUp = mongoose.model("TemplateWarmUp", templateWarmUpsSchema)

module.exports.TemplateSet = mongoose.model("TemplateSet", templateSetsSchema)