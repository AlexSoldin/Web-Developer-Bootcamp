var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// Add a new cat
// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong.")
//     }
//     else{
//         console.log(cat)
//     }
// });

Cat.create({
    name: "Snowy",
    age: 15,
    temperament: "Bland"
}, function(err, cat){
        if(err){
            console.log("Something went wrong.")
        }
        else{
            console.log(cat)
        }
});

// Display cats
Cat.find({}, (err, cats) => {
    if (err){
        console.log(err);
    }
    else{
        console.log("All the Cats");
        console.log(cats);
    }
})