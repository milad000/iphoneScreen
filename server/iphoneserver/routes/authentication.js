var express = require("express");
var router = express.Router();
var User = require("../models/user");
var booking = require("../models/booking");
var passport = require("passport");
var localStrategy = require("passport-local");


//DECODE ENCODE SESSION
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//FOR ENCODING KEY
router.use(require("express-session")({
    secret: "this is first try by milad",
    resave: false,
    saveUninitialized: false
}));

//SEND USER CURRENT USER TO ALL ROUTES
router.use(function (req, res, next) {
    res.locals.currentuser = req.user;
    next();
});

router.use(passport.initialize());
router.use(passport.session());


//SIGN UP FORM
router.get("/register", function (req, res) {
    res.redirect("/register");
});

//SIGN UP 
router.post("/register", function (req, res) {
    User.register(new User({
        username: req.body.username,
        group: 'user'
    }), req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render("error");
        } else {
            passport.authenticate("local"), (req, res, function () {
                res.send("it works");
            });
        }
    });
});

//LOGIN FORM
router.get("/login", function (req, res) {
    res.redirect("login");
});

//LOGIN LOGIC
router.post("/login", passport.authenticate("local"), function (req, res) {
    console.log('login route here<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    console.log(req.user.username+'user here<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    res.redirect("/booking");
    
});

////LOGIN LOGIC
//router.post("/login", passport.authenticate("local",{
//    successRedirect: "/jobs",
//    failureRedirect: "/login"
//}),function(req,res){
//    console.log(passport.isAuthenticate);
//});

//LOGOUT
router.get("/logout", function (req, res) {
    console.log('logout route here<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    req.logout();
    res.redirect("/jobs")
});

//EXPORT
module.exports = router;
