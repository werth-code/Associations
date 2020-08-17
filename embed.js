const mongoose = require("mongoose");
const { isBuffer } = require("util");
    
mongoose.connect('mongodb://localhost:27017/blogDemo', {
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
    posts: [postSchema]
})
const User = mongoose.model("User", userSchema) 

// const newUser = new User({
//     email: "cCHIPcookie@brown.edu",
//     name: "Chip Brown"
// })

// newUser.posts.push({ 
//     title: "This is ANOTHER great day!", 
//     content: "I found ANOTHER treasured coin under my mattress."
// })

// newUser.save( (err, user) => {
//     if(err) console.log("Error", err)
//     else console.log(user)
// })

// const newPost = new Post({
//     title: "Reflections",
//     content: "Delicious"
// })

// newPost.save( (err, post) => {
//      if(err) console.log("Error", err)
//      else console.log(post)
// })

//CONNECTING USER TO POSTS -> ONE TO MANY RELATIONSHIP

User.findOne({name: "Chip Brown"}, (err, user) => {
    if(err) console.log(err)
    else user.posts.push({
        title: "A weird day!",
        content: "Frogs are neat"
    })
    user.save( (err, user) => {
        if (err) console.log(err)
        else console.log(user)
    })
})