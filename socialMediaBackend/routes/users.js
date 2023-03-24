const router = require("express").Router();
const User = require("../models/user")
const bcrypt = require("bcrypt")


//update a user
router.put('/:id',async(req,res)=>{
    if(req.body.userid === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt)
            }catch(error){
                return res.status(500).json(error)
            }
        }
            try{
                const user = await User.findByIdAndUpdate(req.params.id,{
                    $set:req.body,
                })
                res.status(200).json("account has been updated sucessfully");
            }catch(error){
                return res.status(500).json(error)
            }
        }
    else{
        return res.status(403).json("you can update only your account")
    }
})


//delete a user
router.delete("/:id",async(req,res)=>{
    if(req.body.userid === req.params.id  || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("account has been deleted sucessfully")
        }catch(error){
            return res.status(500).json(error)
        }
    }
    else{
        return res.status(403).json("you can only delete your account")
    }
})

//get a user
router.get("/",async(req,res)=>{
    const userId = req.query.userId;
    const username = req.query.username;
    try{
        const user = userId ? await User.findById(userId) : await User.findOne({username: username})
        const {password, updatedAt, ...other} = user._doc
        res.status(200).json(other)
    }catch(error){
        return res.status(500).json(error)
    }
})

//follow a user
router.put("/:id/follow",async(req,res)=>{
    if(req.body.userid !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userid);
            if(!user.followers.includes(req.body.userid)){
                await user.updateOne({ $push: { followers: req.body.userid } });
                await currentUser.updateOne({$push:{followings:req.params.id}})
                res.status(200).json("user has been followed")
            }
            else{
                res.status(403).json("you already follow this user")
            }
        }catch(error){
            return res.status(403).json(error)
        }
    }else{
        res.status(403).json("you can't follow yourself")
    }
})


//unfollow a user
router.put("/:id/unfollow",async(req,res)=>{
    if(req.body.userid !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userid);
            if(user.followers.includes(req.body.userid)){
                await user.updateOne({ $pull: { followers: req.body.userid } });
                await currentUser.updateOne({$pull:{followings:req.params.id}})
                res.status(200).json("user has been unfollowed")
            }
            else{
                res.status(403).json("you dont follow this user")
            }
        }catch(error){
            return res.status(403).json(error)
        }
    }else{
        res.status(403).json("you can't unfollow yourself")
    }
})

module.exports = router;