import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';
import users from '../models/auth.js'

export const signup = async (req,res) => {
    const {name , email , password}=req.body;
    try{
        const existinguser = await users.findOne({ email });
        if(existinguser){
            return res.status(404).json({message:"user already exist"})
        }else{

        const hashpassword = await bcrypt.hash(password,12)
        const newUser = await users.create({name , email , password:hashpassword })
        const token=jwt.sign({email:newUser.email , id:newUser._id },process.env.JWT_TOKEN,{expiresIn:'1h'})
        res.status(200).json({ result:newUser,token })
         } 
        
    }catch(error){
        console.log(error)
        res.status(500).json("something went wrong");
    }

}

export const login= async (req,res) => {
    const {email , password }=req.body;
    try{
        const existinguser=await users.findOne({email});
        if(!existinguser){
            return res.status(404).json("user dont exist")
        }
        const ispasswordcrypt = await bcrypt.compare(password,existinguser.password);
        if(!ispasswordcrypt)
        {
           return res.status(404).json("invalid credential")
        }
        const token=jwt.sign({email:existinguser.email,id:existinguser._id},process.env.JWT_TOKEN,{expiresIn:'1h'})
        res.status(200).json({result:existinguser,token})


    }catch(error){
        res.status(500).json("something went wrong");
    }
}