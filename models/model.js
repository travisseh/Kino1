const mongoose = require("mongoose")
const findOrCreate = require('mongoose-findorcreate')
const passportLocalMongoose = require("passport-local-mongoose")
const workouts = ["Standing Barbell Press", "Weighted Chin-ups", "Seated Cable Rows", "Triceps Rope Pushdown", "Lateral Raises", "Incline Barbell Bench Press", "Flat Dumbbell Bench Press", "Incline Dumbbell Curls", "Rope Hammer Curls", "Bent Over Flyes", "Bulgarian Split Squats", "Romanian Deadlifts", "Leg Extensions", "Hanging Weighted Knee Raises", "Sumo Deadlift Squats", "Dumbbell Forward Lunges", "Seated Dumbbell Shoulder Press", "Lateral Raises", "Lying Leg Raises", "Plank Hold", "Hip Bridge Hold", "Incline Dumbbell Bench Press", "Lat Pull Downs", "Pushups", "Cable Rows", "Goblet Box Squats", "Step-Ups", "Alternating Dumbbell Curls", "Hanging Knee Raises", "Side Plank Hold", "Hip Bridge Hold",]

//BodyWeight
const bodyWeightSchema = new mongoose.Schema ({
    weight: Number,
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
})
const BodyWeight = mongoose.model("BodyWeight", bodyWeightSchema)

//TemplateWarmUp
const templateWarmUpsSchema = new mongoose.Schema({
    percent: Number,
    reps: Number
})
const TemplateWarmUp = mongoose.model("TemplateWarmUp", templateWarmUpsSchema)

//TemplateSet
const templateSetsSchema = new mongoose.Schema({
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
    instructions: [String],
    notesFromCourse: [String],
    type: {
        type: String,
        enum: ["Reverse Pyramid", "Standard Pyramid", "Rest Pause", "Hold", "Standard Pyramid Tweaked"]
    },
    pauseDuration: {
        type: Number,
        required: true
    },
    weightIncrement: {
        type: Number,
        enum: [5, 10, 15, 20, 25, 30]
    },
    startWeight: Number,
    weightType: 
        {
            type: String,
            enum: ["bar","barWeights","dumbbells","dumbbell","body","cable", "rope"]
        },
    special: {
        type: Number,
        enum: [0, 2.5, 15, 20, 57]
        //0= bodyweight, 2.5 = pullups, 15 = 15 increment, 20= 20 increment, 57 = weird five lb increment
    },
    dropDown: [String],
    warmUps: [templateWarmUpsSchema],
    sets: [templateSetsSchema]
})
const TemplateExercise = mongoose.model("TemplateExercise", templateExerciseSchema)

//Workout
const workoutSchema = new mongoose.Schema ({
    name: String,
    nameShort: {
        type: String,
        enum: ["A", "B", "C", "D", "A2", "B2", "C2", "A3", "B3", "C3"]
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
        type: Boolean
    },
    purchased: {
        type: Boolean
    },
    description: String,
    workouts: [workoutSchema] 
})
const Package = mongoose.model("Package", packageSchema)

//Exercise
const exerciseSchema = new mongoose.Schema({
    templateExercise: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'TemplateExercise'
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
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
            weight: Number,
            note: {
                type: String,
                maxlength: 140
            }
        }
    ]
})
const Exercise = mongoose.model("Exercise", exerciseSchema)

const userSchema = new mongoose.Schema ({
    email: String,
    fname: String,
    lname: String,
    googleId: String,
    photoUrl: String,
    askedAboutMacro: {
        type: Boolean,
        default: false
    },
    selectedPackage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package"
    },
    exercises: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exercise"
      }
    ]
  })
  
  userSchema.plugin(passportLocalMongoose)
  userSchema.plugin(findOrCreate)
  
  const User = new mongoose.model("User", userSchema)


//EXPORTS
module.exports = {Exercise, BodyWeight, Package, Workout, TemplateExercise, TemplateWarmUp, TemplateSet, User}
