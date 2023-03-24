const router = require("express").Router();
const PostModel = require("../models/posts.js");
const userModel = require("../models/user.js")


//create a post
router.post('/',async(req,res)=>{
    const newPost = new PostModel(req.body);
    try{
        await newPost.save();
        res.status(200).json(newPost);
    }catch(err){
        res.status(400).json(err)
    }
})


//update a post
router.put("/:id", async(req,res)=>{
    try{
    const post = await PostModel.findById(req.params.id);
    if(post.userId===req.body.userId){
        const updatePost = await post.updateOne({$set: req.body});
        res.status(200).json(updatePost)
    }else{
        res.status(403).json({message :"you can only update your post"})
    }
    }catch(err){
        res.status(400).json(err)
    }
})


//delete a post
router.delete('/:id',async(req,res)=>{
    try{
        const post = await PostModel.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json({message:"post has been deleted"})
        }else{
            res.status(403).json({message:"yoc can delete only your post !"})
        }
    }catch(err){
        res.status(403).json({message:err})
    }
})


//like and dislike a post
router.put('/:id/like',async(req,res)=>{
    try{
        const post = await PostModel.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push : {likes: req.body.userId}});
            res.status(200).json({message:"post has been liked"})
        }else{
            await post.updateOne({$pull : {likes: req.body.userId}})
            res.status(200).json({message:"post has been dislikes !"})
        }
    }catch(err){
        res.status(400).json(err)
    }
})


//get a post
router.get('/:id',async(req,res)=>{
    try{
        const post = await PostModel.findById(req.params.id)
        res.status(200).json(post)
    }catch(err){
        res.status(400).json(err)
    }
})


//get all users posts
router.get('/profile/:username',async(req,res)=>{
    try{
        const user = await userModel.findOne({username:req.params.username});
        const posts = await PostModel.find({userId:user._id})
        res.status(200).json(posts)
    }catch(err){
        res.status(400).json(err)
    }
})

//get all posts from the timeline
router.get("/timeline/:userId",async(req,res)=>{
    try{
        const curUser = await userModel.findById(req.params.userId);
        const userPosts = await PostModel.find({userId: curUser._id})
        const freindPosts = await Promise.all(
            curUser.followings.map((freindId)=>{
                return PostModel.find({userId:freindId})
            })
        )
        res.status(200).json(userPosts.concat(...freindPosts))
    }catch(err){
        res.status(400).json(err)
    }
})

module.exports = router;