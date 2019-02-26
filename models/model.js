const mongoose = require("mongoose")
const workouts = ["Standing Barbell Press", "Weighted Chin-ups", "Seated Cable Rows", "Triceps Rope Pushdown", "Lateral Raises", "Incline Barbell Bench Press", "Flat Dumbbell Bench Press", "Incline Dumbbell Curls", "Rope Hammer Curls", "Bent Over Flyes", "Bulgarian Split Squats", "Romanian Deadlifts", "Leg Extensions", "Hanging Weighted Knee Raises", "Sumo Deadlift Squats", "Dumbbell Forward Lunges", "Seated Dumbbell Shoulder Press", "Lateral Raises", "Lying Leg Raises", "Plank Hold", "Hip Bridge Hold"]

//BodyWeight
const bodyWeightSchema = new mongoose.Schema ({
    weight: Number,
    date: {
        type: Date,
        default: Date.now
    }
})
const BodyWeight = mongoose.model("BodyWeight", bodyWeightSchema)

//TemplateWarmUp
const templateWarmUpsSchema = new mongoose.Schema({
    percent: Number,
    reps: Number
})
const TemplateWarmUp = mongoose.model("TemplateWarmUp", templateWarmUpsSchema)

//TemplateSet
const templateSetsSchema = mongoose.Schema({
    low: Number,
    high: Number
})
const TemplateSet = mongoose.model("TemplateSet", templateSetsSchema)

//TemplateExercise
const templateExerciseSchema = new mongoose.Schema({
    name: String,
    order: {
        type: Number,
        required: true
    },
    videoLink: String,
    instructions: String,
    type: {
        type: String,
        enum: ["Reverse Pyramid", "Standard Pyramid", "Rest Pause", "Hold"]
    },
    warmUps: [templateWarmUpsSchema],
    sets: [templateSetsSchema]
})
const TemplateExercise = mongoose.model("TemplateExercise", templateExerciseSchema)

//Workout
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
const Workout = mongoose.model("Workout", workoutSchema)

//Package
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
const Package = mongoose.model("Package", packageSchema)

//Exercise
const exerciseSchema = new mongoose.Schema({
    templateExercise: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'TemplateExercise'
    }],
    name: {
        type: String,
        enum: workouts,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    workout: {
        type: String,
        required: true
    },
    packageUrl: {
        type: String,
        require: true
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
const Exercise = mongoose.model("Exercise", exerciseSchema)


//EXPORTS
module.exports.Exercise = Exercise
module.exports.BodyWeight = BodyWeight 
module.exports.Package = Package
module.exports.Workout = Workout
module.exports.TemplateExercise = TemplateExercise
module.exports.TemplateWarmUp = TemplateWarmUp 
module.exports.TemplateSet = TemplateSet