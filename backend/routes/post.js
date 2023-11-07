const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const Post = require('../models/Post')
const Comment = require('../models/Comment')

//Create
router.post("/create",async (req,res)=>{
    try{
        const newPost = new Post(req.body)
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)

    }catch(err){
        res.status(200).json(err)
    }

})


//Update 
router.put("/:id",async (req,res)=>{
    try{

        const updatedUser = await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)

        }
    catch(err){
        res.status(500).json(err)
    }
})

//Delete
router.delete("/:id",async (req,res)=>{
    try{
        await Post.findByIdAndDelete(req.params.id)
      
        res.status(200).json("Post has been deleted!")

        }
    catch(err){
        res.status(500).json(err)
    }
})


//Get Post Details
router.get("/:id",async (req,res)=>{
    try{
       const post = await Post.findById(req.params.id)
       res.status(200).json(post)

        }
    catch(err){
        res.status(500).json(err)
    }
})

//Get Post
router.get("/",async (req,res)=>{
    try{
       const posts = await Post.find()
       res.status(200).json(posts)

        }
    catch(err){
        res.status(500).json(err)
    }
})

//GET USER POSTS
router.get("/user/:userId",async (req,res)=>{
    try{
        const posts= await Post.find({userId:req.params.userId})
        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports = router