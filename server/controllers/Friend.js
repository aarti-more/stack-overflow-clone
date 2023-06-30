import mongoose from "mongoose";
import users from '../models/auth.js'

export const postFriend=async(req,res)=>{
    const {id:_id}=req.params;
    const{friendAdded,friendId}=req.body;
     if(!mongoose.Types.ObjectId.isValid(_id)){
         return res.status(404).send("post unavailable");
     }
    
    try{
    const updatedUser=await users.findByIdAndUpdate({_id},{$addToSet:{'friend':[{friendAdded,friendId}]}})
    res.status(200).json(updatedUser)
    
    }catch(error){
        res.status(400).json(error)
       
    }    

}

export const deleteFriend=async(req,res)=>{
    const {id:_id}=req.params;
    const{friendId}=req.body;
    if(!mongoose.Types.ObjectId.isValid(_id))
    {
        res.status(404).send("User is anavailable")
    }
    if(!mongoose.Types.ObjectId.isValid(friendId))
    {
        res.status(404).send("friend is unavailable")
    }
    
    try{
        await users.updateOne(
            {_id},
            { $pull:{ 'friend':{_id:friendId}}}
            )
            res.status(200).json({message:"successfully deleted friend"})

    }catch(error){
        res.status(404).json(error)
    }


}

// export const getAllList=async(req,res )=>{
//     const{id:_id}=req.params;
//     if(!mongoose.Types.ObjectId.isValid(_id))
//     {
//         res.status(404).send("User is anavailable")
//     }
//     try{
//     const friendList=await users.findById({_id});
//     res.status(200).json(friendList);
//     }catch(error){
//     res.status(400).json({massage:error.massage});
//     }
    
//     }