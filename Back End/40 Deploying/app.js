var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});

