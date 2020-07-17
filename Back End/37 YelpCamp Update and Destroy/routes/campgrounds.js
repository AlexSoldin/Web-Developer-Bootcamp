var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
const campground = require("../models/campground");

// Index Route
router.get("/", (req, res) => {
    Campground.find({}, (err, campgrounds) => {
        if(err)
            console.log(err);
        else
            res.render("campgrounds/index", {campgrounds: campgrounds, currentUser: req.user});
    });
});

// Create Route
router.post("/", isLoggedIn, (req, res) => {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, image: image, description: description, author: author};
    
    Campground.create(newCampground, (err, newlyCreated) => {
        if(err)
            console.log(err);
        else
            res.redirect("/campgrounds");
    });    
});

// New Route
router.get("/new", isLoggedIn, (req, res) => {
    res.render("campgrounds/new");
});

// Show Route
router.get("/:id", (req, res) => {
    Campground.findById(req.params.id).populate("comments").exec((err, foundCampground) => {
        if(err)
            console.log(err);
        else{
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// Edit Route
router.get("/:id/edit", checkCampgroundOwnership, (req, res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// Update Route
router.put("/:id", checkCampgroundOwnership, (req, res) => {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, updatedCampground) => {
        if(err){
            res.redirect("/campgrounds");
        }
        else{
            res.redirect("/campgrounds/"+ req.params.id);
        }
    });
});

// Destroy Route
router.delete("/:id", checkCampgroundOwnership, (req, res) => {
    Campground.findByIdAndRemove(req.params.id, (err) => {
        if(err){
            res.redirect("/campgrounds");
        }
        else{
            res.redirect("/campgrounds");
        }
    });
});

// Middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

function checkCampgroundOwnership(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, (err, foundCampground) => {
            if(err){
                res.redirect("back");
            }
            else{
                if(foundCampground.author.id.equals(req.user._id)){ // .equals as the mongoose object and string will not work with ===
                    next();
                }
                else{
                    res.redirect("back");
                }
            }
        });
    }
    else{
        res.redirect("back");
    }
}

module.exports = router;