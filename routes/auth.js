const express = require("express")
const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy
const findOrCreate = require("mongoose-findorcreate")
const User = require("../models/model").User
const auth = express.Router()


//AUTH SETTINGS
passport.use(User.createStrategy())
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//GOOGLE AUTH SETUP
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
  useProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
function(accessToken, refreshToken, profile, cb) {

  User.findOne({
    googleId: profile.id
  }, function(err, user){
    if (user){
      user.lastLogin = Date.now()
      user.save()
      return cb(err,user)
    } else {
      User.create({
        googleId: profile.id,
        email: profile.emails[0].value,
        fname: profile.name.givenName,
        lname: profile.name.familyName,
        photoUrl: profile.photos[0].value,
        hasAccess: true,
        phases: [1,1],
        verifiedPackages: [false,false,false],
        subscribed: false,
        canceled: false,
        greekGodProtocol: 1
      }, function(err, user){
        return cb(err,user)
      })
    }
  })
}
));


//ROUTES
auth.get("/", passport.authenticate("google", { scope: ['https://www.googleapis.com/auth/userinfo.profile',
'https://www.googleapis.com/auth/userinfo.email']})
)

auth.get('/kino1', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });

module.exports = auth