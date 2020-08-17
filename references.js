const mongoose = require("mongoose");
const { isBuffer } = require("util");
const { getMaxListeners } = require("process");

mongoose.connect('mongodb://localhost:27017/blogDemo_2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB!')).catch(error => console.log(error.message));

//POST
const postSchema = new mongoose.Schema({
    title: String,
    content: String
})
const Post = mongoose.model("Post", postSchema)

//USER
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
})

const User = mongoose.model("User", userSchema)


// User.create({
//     email: "bob@gmail.com",
//     name: "Bobby Daniels"
// })

// Post.create({
//     title: "FUUUUUUUUUUUUUUUUU",
//     content: "regertwhrtwjyj"
// }, (err, post) => {
//     User.findOne({ email: "bob@gmail.com" }, (err, foundUser) => {
//         if(err) {
//             console.log(err)
//         } else {
//             foundUser.posts.push(post)
//             foundUser.save( (err, data) => {
//                 if(err) {
//                      console.log(err)
//                 } else {
//                     console.log(data)
//                 }
//             })
//         }
//     })
// })

User.findOne({email: "bob@gmail.com"}).populate("posts").exec( (err, user) => {
    if(err) console.log(err)
    else console.log(user)
})