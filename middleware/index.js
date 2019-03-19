

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next()
    }
    res.redirect("/")
}

function hasPackageSelected (req, res, next){
    if (req.user.selectedPackage != undefined){
        return next()
    }
    res.redirect("/selectPackage")
}



module.exports = {isLoggedIn, hasPackageSelected}