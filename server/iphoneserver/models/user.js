var mongoose =require("mongoose");
var passportlocalmongoose = require("passport-local-mongoose");




var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    group:String
});

UserSchema.plugin(passportlocalmongoose);
//EXPORT
module.exports = mongoose.model("User",UserSchema);