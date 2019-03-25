const express = require("express")
const router = express.Router()

router.get('/', function(req, res){
    req.logout();
    req.flash('success', 'Logged out successfully')
    res.redirect('/');
  });


module.exports = router