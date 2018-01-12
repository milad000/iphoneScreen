var mongoose = require("mongoose");




var booking = new mongoose.Schema({
    fullName:String,
    email: String,
    iphoneModel: String,
    phoneNumber: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },

    created: {
        type: Date,
        default: Date.now
    }
});


//EXPORT
module.exports = mongoose.model("booking", booking);
