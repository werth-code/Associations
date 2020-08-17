const mongoose = require("mongoose");
const { isBuffer } = require("util");
const { getMaxListeners } = require("process");

mongoose.connect('mongodb://localhost:27017/blogDemo_2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB!')).catch(error => console.log(error.message));

const Post = require("./models/post")
const User = require("./models/user")

const postSchema = new mongoose.Schema({
    title: String,
    content: String
})

// User.create({
//     email: "bob@gmail.com",
//     name: "Bobby Daniels"
// })

// Post.create({
//     title: "ANOTHER THINGAMABOB",
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

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec( (err, user) => {
//     if(err) console.log(err)
//     else console.log
// })