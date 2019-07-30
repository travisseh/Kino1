const express = require("express")
const Package = require("../models/model").Package
const User = require("../models/model").User
const middleware = require("../middleware")
const router = express.Router()


router.get('/:packageUrl/:keyWord', middleware.isLoggedIn, function(req, res, next){
    const packageUrl = req.params.packageUrl
    const keyWord = req.params.keyWord
    const keyLowercase = keyWord.toLowerCase()
    Package.findOne({url: packageUrl}, function(err, foundPackage){
        if (err) {
            res.send(err)
        } else if(foundPackage.verifyWord === keyLowercase){
            console.log("matches")
            let position
            if (packageUrl === 'warrior_shredded'){
                position = 0
            } else if (packageUrl === 'goddess_toning'){
                position = 1
            } else if (packageUrl === 'greek_god'){
                position = 2
            }
            User.findOne({_id: req.user._id}, function(err, foundUser){
                foundUser.verifiedPackages.splice(position,1,true)
                foundUser.save()
                console.log('user_verifiedpackages:')
                console.log(foundUser.verifiedPackages)
            })
            res.send(true)
        } else {
            console.log("doesn't match")
            res.send(false)
        }
    })  
})

module.exports = router