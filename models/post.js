const mongoose = require("mongoose");
const { isBuffer } = require("util");
const { getMaxListeners } = require("process");

mongoose.connect('mongodb://localhost:27017/blogDemo_2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB!')).catch(error => console.log(error.message));


const postSchema = new mongoose.Schema({
    title: String,
    content: String
})

module.exports = mongoose.model("Post", postSchema)
