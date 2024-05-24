const { PostSchema } = require("../models/Post");
const mongoose = require('mongoose');

const Post = mongoose.model('Post', PostSchema);

const getPosts = async (req, res) => {
    // Post.find({}, (err, post)=>{
    //     if(err) {
    //         res.send(err);
    //     }
    //     debug('reponse json')
    //     res.json(post);
    // })

    try{
        const posts = await Post.find({});
        res.json(posts);
    }catch(err){
        res.status(500).send(err);
    }
    
};

const getPostByID = async (req, res) => {
    // Post.findById(req.params.postId, (err, post) => {
    //     if(err) {
    //         res.send(err);
    //     }
    //     res.json(post);
    // });

    const post = await Post.findById(req.params.postId);
    res.json(post)
}

const addNewPost = async (req, res) => {
    // let newPost = new Post(req.body);

    // newPost.save((err, post) => {
    //     if (err) {
    //         res.send(err)
    //     }
    //     res.status(201).json(post)
    // });

    const newPost = await new Post(req.body);
    const post = await newPost.save();
    res.status(201).json(post);
}

module.exports = {getPosts, addNewPost, getPostByID}