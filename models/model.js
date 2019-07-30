const mongoose = require("mongoose")
const findOrCreate = require('mongoose-findorcreate')
const passportLocalMongoose = require("passport-local-mongoose")
const workouts = ["Front Squats", "Weighted Pull-ups", "Reverse Lunges", "Standing Barbell Press", "Weighted Dips", "Weighted Chin-ups", "Seated Cable Rows", "Triceps Rope Pushdown", "Lateral Raises", "Incline Barbell Bench Press", "Flat Dumbbell Bench Press", "Flat Barbell Bench Press", "Incline Dumbbell Curls", "Rope Hammer Curls", "Bent Over Flyes", "Bulgarian Split Squats", "Romanian Deadlifts", "Leg Extensions", "Hanging Weighted Knee Raises", "Sumo Deadlift Squats", "Dumbbell Forward Lunges", "Seated Dumbbell Shoulder Press", "Lateral Raises", "Lying Leg Raises", "Plank Hold", "Hip Bridge Hold", "Incline Dumbbell Bench Press", "Lat Pull Downs", "Pushups", "Cable Rows", "Goblet Box Squats", "Step-Ups", "Alternating Dumbbell Curls", "Hanging Knee Raises", "Side Plank Hold", "Hip Bridge Hold", "Hip Thrusts", "Incline Hammer Curls","Dumbbell Romanian Deadlifts", "Face Pulls", "One-Arm Overhead Triceps Extensions", "Dumbbell Upright Rows", "Side-to-Side Knee Ups", "Barbell Box Squat", "Single-Leg Romanian Deadlift", "Seated Bent-Over Flyes"]

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
        enum: ["Reverse Pyramid", "Standard Pyramid", "Rest Pause", "Hold", "Standard Pyramid Tweaked","Kino Rep"]
    },
    pauseDuration: {
        type: Number,
        required: true
    },
    weightIncrement: {
        type: Number,
        enum: [2.5, 5, 10, 15, 20, 25, 30]
    },
    weightIncrementKg: {
        type: Number
    },
    startWeight: Number,
    startWeightKg: Number,
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
    phase: {
        type: Number
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
    phaseIndex: Number,
    active: {
        type: Boolean
    },
    purchased: {
        type: Boolean
    },
    description: String,
    verifyQ: String,
    verifyLink: String,
    verifyLength: Number,
    verifyWord: String,
    phases: Number,
    bonusPhase: Boolean,
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
    phase: {
        type: Number
    },
    packageUrl: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    isSetCreator: {
        default: false,
        type: Boolean
    },
    sets: [
        {
            reps: Number,
            weight: Number,
            weightKg: Number,
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
    createdDate: {
        type: Date,
        default: Date.now
    },
    stripe_id: String,
    stripe_subscription_id: String,
    googleId: String,
    photoUrl: String,
    askedAboutMacro: {
        type: Boolean,
        default: false
    },
    dismissCalTracks: {
        type: Boolean,
        default: false
    },
    selectedPackage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package"
    },
    verifiedPackages: [Boolean],
    packageName: {
        type: String,
    },
    exercises: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exercise"
      }
    ],
    date: {
        type: Date,
        default: Date.now
    },
    hasAccess: {
        type: Boolean
    },
    lastLogin: {
        type: Date
    },
    barWeight: {
        type: Number,
        default: 45
    },
    weightUnit: {
        type: String,
        default: "lbs",
        enum: ["lbs", "kgs"]
    },
    subscribed: Boolean,
    canceled: Boolean,
    phases: [Number]
  })
  
  userSchema.plugin(passportLocalMongoose)
  userSchema.plugin(findOrCreate)
  
  const User = new mongoose.model("User", userSchema)


//EXPORTS
module.exports = {Exercise, BodyWeight, Package, Workout, TemplateExercise, TemplateWarmUp, TemplateSet, User}
