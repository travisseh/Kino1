const functions = require('../modules/functions')

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next()
    }
    req.flash("error", "Please log in to access that page")
    res.redirect("/")
}

function hasPackageSelected (req, res, next){
    if (req.user.selectedPackage != undefined || req.user.selectedPackage != null){
        return next()
    } else {
        res.redirect("/selectPackage")
    }
    
}

function hasAccess (req, res, next) {
    if (req.user.hasAccess === (undefined || null || true)) {
        return next()
    } else {
        res.redirect("/closedSignup")
    }
}

function trialExpired (req, res, next){
    if (req.user.subscribed === true){
        return next()
    } else {
        const createdDate = req.user.createdDate
        const freeTrialLength = 7
        const daysLeft = functions.daysLeft(createdDate, freeTrialLength)
        if (daysLeft <= 0){
            res.redirect('/subscribe')
        } else {
            return next()
        }
    }
}



module.exports = {isLoggedIn, hasPackageSelected, hasAccess, trialExpired}