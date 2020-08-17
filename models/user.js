const mongoose = require("mongoose");
const { isBuffer } = require("util");
const { getMaxListeners } = require("process");

mongoose.connect('mongodb://localhost:27017/blogDemo_2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB!')).catch(error => console.log(error.message));

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

module.exports = mongoose.model("User", userSchema)