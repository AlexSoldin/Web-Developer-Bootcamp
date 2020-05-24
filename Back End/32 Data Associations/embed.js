var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/blog_demo_0", { useNewUrlParser: true, useUnifiedTopology: true});

// POST
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema)

// USER
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema)

// var newUser = new User({
//     email: "harry@potter.edu",
//     name: "Harry Potter"
// });

// newUser.posts.push({
//     title: "How to brew polyjuice potion",
//     content: "Jk. Going to potoins class to learn it now."
// });

// newUser.save((err, user) => {
//     if (err)
//         console.log(err);
//     else
//         console.log(user);
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });
// newPost.save((err, post) => {
//     if (err)
//         console.log(err);
//     else
//         console.log(post);
// });

User.findOne({name: "Harry Potter"}, (err, user) => {
    if (err)
        console.log(err);
    else
        console.log(user);
        // user.posts.push({
        //     title: "3 Things I Really Hate",
        //     content: "Voldemort. Voldemort. Voldemort."
        // });
        // user.save((err, user) => {
        //     if (err)
        //         console.log(err);
        //     else
        //         console.log(user);
        // });
});