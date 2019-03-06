const express = require("express")
const session = require('express-session')
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const GoogleStrategy = require('passport-google-oauth20').Strategy
const findOrCreate = require("mongoose-findorcreate")
const auth = express.Router()

auth.get("/", function(req, res, next){
    passport.authenticate("google", { scope: ["profile"]})
})

auth.post("/", function(req, res, next){
    res.redirect("/dashboard")
})

module.exports = auth