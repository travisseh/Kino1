const express = require("express")
const router = express.Router()
const User = require('../models/model').User
const functions = require('../modules/functions')


router.post("/:packageName/:protocol", function(req, res, next){
    const packageName = req.params.packageName
    const protocol = req.params.protocol
    User.findOne({_id: req.user._id}, function(err, foundUser){
        if (err){
            console.log(err)
        } else {
            foundUser.greekGodProtocol = protocol
            foundUser.save(function(){
                res.send(foundUser)
            })
        }
    })
})



module.exports = router