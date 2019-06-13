const express = require("express")
const router = express.Router()
const User = require('../models/model').User
const functions = require('../modules/functions')


router.post("/:package/:phase", function(req, res, next){
    const package = req.params.package
    const phase = req.params.phase
    const phaseIndex = functions.packagesToPhasesIndex(package)
    User.findOne({_id: req.user._id}, function(err, foundUser){
        if (err){
            console.log(err)
        } else {
            foundUser.phases.splice(phaseIndex,1,phase)
            foundUser.save(function(){
                res.send(foundUser)
            })
        }
    })
})



module.exports = router