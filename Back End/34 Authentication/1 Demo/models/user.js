var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

// Add methods to user.js
UserSchema.plugin(passportLocalMongoose); 

module.exports = mongoose.model("User", UserSchema);