var express = require("express");
var mongoose = require('mongoose');
var bodyparser = require("body-parser");
var methodOverride = require("method-override");
var passportlocalmongoose = require("passport-local-mongoose");



mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/test5");

//MODELS
var jobs = require("./models/booking");
var User = require("./models/user");

//ROUTES
var jobsRoutes = require("./routes/main");
var Authentication = require("./routes/authentication");

var app = express();

//APP CONFIG
var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(jobsRoutes);
app.use(Authentication);





//PORT, IP
app.listen(3000, function () {
    console.log("server started");
});
