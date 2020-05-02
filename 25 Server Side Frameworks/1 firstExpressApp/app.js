var express = require("express");
var app = express();

// "/" -> "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" -> ""
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" -> "Woof!"
app.get("/dog", function(req, res){
    console.log("Someone made a request to /dog")
    res.send("Woof!");
});

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " Subreddit Page");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    console.log(req.params);
    res.send("Welcome to the Comments Page!");
});

// This runs if a get request does not match a defined route
// Must be placed after defined routes
app.get("*", function(req, res){ 
    res.send("You are a star!");
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});