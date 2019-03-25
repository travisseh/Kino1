

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



module.exports = {isLoggedIn, hasPackageSelected}