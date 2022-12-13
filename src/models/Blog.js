const mongooose = require('mongoose');


const blogSchema = new mongooose.Schema({
    // Your code goes here
    title:{type:String},
    body:{type: String},
    image:{type: String}
})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;

