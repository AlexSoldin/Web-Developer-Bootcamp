var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "Meow"
    }

    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    
    res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:word/:count", function(req, res){
    var word = req.params.word;
    var counter = Number(req.params.count);
    var output = "";

    for(var i=0; i<counter; i++){
        output += word + " "; 
    }

    res.send(output);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});