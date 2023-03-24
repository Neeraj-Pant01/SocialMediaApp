const router = require("express").Router();
const User = require("../models/user")
const bcrypt = require("bcrypt");

router.post("/register",async(req,res)=>{

    try{
        //generate password
        const salt = await bcrypt.genSalt()
        const hashedPass = await bcrypt.hash(req.body.password,salt);


        //create a new user
        const user =  new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPass
        })

        await user.save()
        res.status(200).json(user);
    }catch(error){
        res.status(400).json(error)
    }
})

router.post("/login",async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        !user && res.status(404).json("user not found")

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(500).json("wrong password")
        const {password, ...others} = user._doc
        res.status(200).json(others)
    }catch(error){
        res.status(500).json(error)
    }
    
})


module.exports = router