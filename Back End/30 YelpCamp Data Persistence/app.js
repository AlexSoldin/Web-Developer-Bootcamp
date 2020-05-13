var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/yelp_camp", { useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {name: "Granite Hill", 
//     image: "https://cdn.pixabay.com/photo/2018/10/28/16/58/lake-3779280__340.jpg",
//     description: "This is a huge granite hill. No bathrooms, no water but beautiful granite!"}, function(err, campground){
//         if(err)
//             console.log(err);
//         else
//             console.log(campground);
// });

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    Campground.find({}, (err, campgrounds) => {
        if(err)
            console.log(err);
        else
            res.render("index", {campgrounds: campgrounds});
    });
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new");
});

app.post("/campgrounds", (req, res) => {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};
    
    Campground.create(newCampground, (err, newlyCreated) => {
        if(err)
            console.log(err);
        else
            res.redirect("/campgrounds");
    });    
});

app.get("/campgrounds/:id", (req, res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
        if(err)
            console.log(err);
        else
            res.render("show", {campground: foundCampground});
    });
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
})