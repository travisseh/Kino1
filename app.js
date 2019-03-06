//IMPORTS
    //Express Basics
require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser");
const ejs = require("ejs")
const app = express()
const port = 8080
const path = require("path")

    //DB
const mongoose = require("mongoose")
const seedPackages = require("./models/seed").seedPackages
const User = require("./models/model").User

    //Auth
const session = require('express-session')
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const GoogleStrategy = require('passport-google-oauth20').Strategy
const findOrCreate = require('mongoose-findorcreate')

    //Route Handlers
const auth = require("./routes/auth")
const dashboard = require("./routes/dashboard")
const selectPackage = require("./routes/selectPackage")
const index = require("./routes/index")
const macroCalc = require("./routes/macroCalc")
const workout = require("./routes/workout")

// DB CONNECTION
// mongoose.connect("mongodb://localhost:27017/Kino1", {useNewUrlParser: true})

mongoose.connect("mongodb+srv://admin-travisse:test123@cluster0-vd7zd.mongodb.net/Kino1", {useNewUrlParser: true})

// seedPackages()

//GLOBAL SETTINGS
app.use(express.static(path.join(__dirname, "public")))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
mongoose.set("useCreateIndex", true)

//AUTHENTICATION



passport.use(User.createStrategy())
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:8080/auth/google/kino1",
  useProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
function(accessToken, refreshToken, profile, cb) {
  console.log(profile)

  User.findOrCreate({ 
    googleId: profile.id,
    fname: profile.name.givenName,
    lname: profile.name.familyName,
    photoUrl: profile.photos[0].value
  }, function (err, user) {
    return cb(err, user);
  });
}
));


//ROUTES
app.use("/", index)
app.use("/dashboard", dashboard)
app.use("/selectPackage", selectPackage)
app.use("/macrocalc", macroCalc)
app.use("/workout", workout)
// app.use("/auth/google", auth)

app.get("/auth/google", passport.authenticate("google", { scope: ["profile"]})
)

app.get('/auth/google/kino1', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });


app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


// app.get("*", function(req, res, next){
//   res.redirect("/")
// })

//PORT LISTENER
app.listen(process.env.PORT || port, function(){
    console.log(`listening on port ${port}`)
})