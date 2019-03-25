

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next()
    }
    // req.flash("error", "You need to be logged in")
    res.redirect("/")
}

function hasPackageSelected (req, res, next){
    if (req.user.selectedPackage != undefined || req.user.selectedPackage != null){
        return next()
    } else {
        res.redirect("/selectPackage")
    }
    
}



module.exports = {isLoggedIn, hasPackageSelected}