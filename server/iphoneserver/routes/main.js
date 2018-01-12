var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var booking = require("../models/booking");
var User = require("../models/user");
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

//USE SESSION IN ALL ROUTES
router.use(passport.initialize());
router.use(passport.session());

//SEND USER CURRENT USER TO ALL ROUTES
// router.use(function (req, res, next) {
//     res.locals.currentuser = req.user;
//     next();
// });
// Add headers
router.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://192.168.0.109:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
//test
router.get("/",function(req,res){
    res.send("app works!");
})

//ALL JOBS
router.get("/booking", function (req, res) {
    booking.find({}, function (err, booking) {
        if (err) {
            console.log("ERROR!");
        } else {
            res.send(
                 booking
            );
        }
    });
});
//ALL JOBS
router.get("/newbooking", function (req, res) {
    console.log("------get---------------");
    res.render("newbooking.ejs");
    // booking.find({}, function (err, booking) {
    //     if (err) {
    //         console.log("ERROR!");
    //     } else {
    //         res.redirect("/allbooking", {
    //             datas: booking
    //         });
    //     }
    // });
});






//CREATE JOBS
router.post("/newbooking", function (req, res) {
    console.log("----------------------------");
    console.log(req.body);
    // var fullName = req.body.fullName;
    // var email = req.body.email;
    // var iphoneModel = req.body.iphoneModel;
    // var phoneNumber = req.body.phoneNumber;

    // var author = {
    //     id: req.user._id,
    //     username: req.user.username
    // }
    // var newbooking = {
    //     fullName: fullName,
    //     email: email,
    //     iphoneModel: iphoneModel,
    //     phoneNumber: phoneNumber
    // }
    var Booking = req.body;
    booking.create(Booking, function (err, newbooking) {
        if (err) {
            res.send("error in create new booking");
        } else {
            console.log(newbooking);
            res.redirect("/booking");
        }
    });
});



// //EDIT SELECTED JOBS
// router.get("/jobs/:id/edit", isLogedIn, function (req, res) {
//     jobs.findById(req.params.id, function (err, checkUser) {
//         console.log(req.user.group);
//         if ((checkUser.author.id.equals(req.user._id)) || (req.user.group == 'admin')) {
//             jobs.findById(req.params.id, function (err, editjobs) {
//                 if (err) {
//                     res.redirect("/jobs");
//                 } else {
//                     res.render("editJobs", {
//                         data: editjobs
//                     });
//                 }
//             });
//         } else {
//             res.send("<a href='/jobs' style='font-size:3em;'>home</a><h1>شما امکان تغییر این فایل را ندارید!</h1>");
//         }
//     });
// });

// //UPDATE SELECTED JOBS
// router.put("/jobs/:id", function (req, res) {
//     var jobNumber = req.body.data.jobNumber,
//         jobField = req.body.data.jobField,
//         jobTitle = req.body.data.jobTitle,
//         jobCity = req.body.data.jobCity,
//         jobArea = req.body.data.jobArea,
//         jobAddress = req.body.data.jobAddress,
//         jobPhone = req.body.data.jobPhone,
//         jobInsurance = req.body.data.jobInsurance,
//         jobSalary = req.body.data.jobSalary,
//         jobAccommodation = req.body.data.jobAccommodation,
//         jobDescription = req.body.data.jobDescription;
//     var author = {
//         id: req.user._id,
//         username: req.user.username
//     }
//     var editedJobs = {
//         jobNumber: jobNumber,
//         jobField: jobField,
//         jobTitle: jobTitle,
//         jobCity: jobCity,
//         jobArea: jobArea,
//         jobAddress: jobAddress,
//         jobPhone: jobPhone,
//         jobInsurance: jobInsurance,
//         jobSalary: jobSalary,
//         jobAccommodation: jobAccommodation,
//         jobDescription: jobDescription,
//         author: author
//     }
//     jobs.findByIdAndUpdate(req.params.id, editedJobs, function (err, job) {
//         if (err) {
//             res.redirect("/jobs");
//         } else {
//             res.redirect("/jobs/" + req.params.id);
//         }

//     });
// });

// //DELETE JOBS
// router.delete("/jobs/:id", isLogedIn, function (req, res) {
//     jobs.findById(req.params.id, function (err, checkUser) {
//         console.log(req.user.group);
//         if ((checkUser.author.id.equals(req.user._id)) || (req.user.group == 'admin')) {
//             jobs.findByIdAndRemove(req.params.id, function (err) {
//                 if (err) {
//                     res.redirect("/jobs");
//                 } else {
//                     res.redirect("/jobs");
//                 }
//             });
//         } else {
//             res.send("<a href='/jobs' style='font-size:3em;'>home</a><h1>شما امکان تغییر این فایل را ندارید!</h1>");
//         }
//     });
// });
//ACCESS ERROR 



//ISLOGEDIN
function isLogedIn(req, res, next) {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};


//EXPORT
module.exports = router;
