var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/blog_demo_1", { useNewUrlParser: true, useUnifiedTopology: true});

var Post = require("./models/post");
var User = require("./models/user");

// Post.create({
//     title: "How to cook the best burger pt. 4",
//     content: "dasdnjkasndkasndlk"
// }, (err, post) => {
//     User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
//         if (err)
//             console.log(err);
//         else
//             foundUser.posts.push(post);
//             foundUser.save((err, data) => {
//                 if(err)
//                     console.log(err);
//                 else
//                     console.log(data);
//             });
//     });
// });

// Find user, find all posts for that user
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
//     if(err)
//         console.log(err);
//     else
//         console.log(user);
// });