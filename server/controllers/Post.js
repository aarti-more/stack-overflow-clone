import mongoose from 'mongoose'
import post from '../models/Postmodel.js'
 
export const PostData = async(req,res)=>{
    const postdata=req.body;
    const postinformation=new post(postdata);
    try{
        await postinformation.save();
        res.status(200).json("posted a data successfuly")

    }catch(error){
        console.log(error)
        res.status(409).json("could not post ")
    }
} 
export const getAllPosts=async(req,res )=>{
    try{
    const postList=await post.find();
    res.status(200).json(postList);
    
    }catch(error){
    res.status(400).json({massage:error.massage});
    }
    
    }

    export const votePosts=async(req,res)=>{
        const {id:_id}=req.params;
        const {value,userId}=req.body;
         if(!mongoose.Types.ObjectId.isValid(_id))
         {
             return res.status(404).send("post is not available"); 
         }
        try{
            const Post= await post.findById(_id);
            const like= Post.Like.findIndex((id)=>id===String(userId))
            const dislike=Post.disLike.findIndex((id)=>id===String(userId))
            if(value==='Like')
            {
                if(dislike!==-1)
                {
                    Post.disLike=Post.disLike.filter((id) => id!==String(userId))
                }
                if(like===-1){
                    Post.Like.push(userId)
                }
                else{
                    Post.Like=Post.Like.filter((id)=>id!==String(userId))
                }
            }
    
            if(value==='disLike')
            {
                if(like!==-1)
                {
                    Post.Like=Post.Like.filter((id)=>id!==String(userId))
                }
                if(dislike===-1)
                {
                    Post.disLike.push(userId)
                }
                else{
                    Post.disLike=Post.disLike.filter((id)=>id!==String(userId))
                }
    
            }
    
            await post.findByIdAndUpdate(_id,Post)        
            res.status(200).json({message:"voted successfully"})
    
        }catch(error){
            res.status(404).json({message:"id not found"})
        }
    }
