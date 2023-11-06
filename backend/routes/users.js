const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

//Update 
router.put("/:id",async (req,res)=>{
    try{
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
           req.body.password = await bcrypt.hash(req.body.password,salt)
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)

        }
    catch(err){
        res.status(500).json(err)
    }
})

//Delete



//Get User

module.exports = router