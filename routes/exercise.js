const express = require("express")
const Exercise = require("../models/model").Exercise
const middleware = require("../middleware")
const router = express.Router()


router.get("/", function(req, res, next){
    res.send("hello")
})


  //View previous specific exercises
  router.get("/:templateExerciseName", middleware.isLoggedIn, function(req, res, next){
    // templateExerciseId = req.params.templateExerciseId
    templateExerciseName = req.params.templateExerciseName

    //get all exercises where: user = this user, templateExercise = this templateExerciseId, orderby date 
    Exercise.find({userId: req.user._id, name: templateExerciseName}).sort({date: -1}).exec(function(err, foundExercises){
      if (err) {
        console.log(err)
      } else {
        fixedFoundExercises = JSON.parse((JSON.stringify(foundExercises)))
        res.send(fixedFoundExercises)
      }
    })

  })



module.exports = router