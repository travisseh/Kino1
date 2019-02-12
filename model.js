const mongoose = require("mongoose")

const workOutSchema = new mongoose.Schema ({
    name: String,
    exercises: [
        {
            _id: FILLIN,
            name: String,
            date: Date,
            warmUps: [
                {
                    percent: Number,
                    reps: Number
                }
            ],
            sets: [
                {
                    highReps: Number,
                    lowReps: Number,
                    actualReps: Number,
                    weight: Number
                }
            ]
        }
    ]
})

const Workouts = mongoose.model("Post", postSchema)

const userSchema = new mongoose.Schema ({
    email: String,
    name: String,
    posts: [postSchema]
})

const User = mongoose.model("User", userSchema)

const newUser = new User ({
    email: "joe@gmail.com",
    name: "Joe",
    posts: [{
        title: "Great title!",
        body: "Great body"
    }]
})



module.exports 