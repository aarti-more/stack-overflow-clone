import mangoose from "mongoose";


const PostSchema=mangoose.Schema({
    postTitle:{type:String},
    postExp:{type:String},
    myFile:{type:[String],default:[]},
    Like:{type:[String] ,default:[]},
    disLike:{type:[String],default:[]},
    userPosted:{type:String,required:"Post must have auther"},
    userId:{type:String},
    postedOn:{type:Date , default:Date.now},
    
})
export default mangoose.model("Post",PostSchema)