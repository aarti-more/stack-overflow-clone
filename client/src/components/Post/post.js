import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PostData } from "../../actions/post";
import Leftsidebar from "../Leftsidebar/Leftsidebar";

const Post = () => {
const[postTitle,setpostTitle]=useState(''); 
const[postExp,setpostExp]=useState('');   
const[myFile,setmyFile]=useState('');


const dispatch=useDispatch();

const User=useSelector((state)=>(state.currentUserReducer));
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(postExp);
        dispatch(PostData({postTitle,postExp,myFile,userPosted:User.result.name,userId:User.result._id},navigate));
        };
        //setmyFile('')

    const handlefileUpload = async (e) => {
        
      const file = e.target.files[0];
      //console.log(file)

        const base64 = await convertToBase64(file);

        //console.log(base64)
        setmyFile(base64);
    };
   




return (
    <div className="leftbar-postform" style={{display:"flex"}}>
        <div><Leftsidebar/></div>
        <div className="askquestion" >
            <div className="askquestion-container">
            
                <form onSubmit={handleSubmit}>
                    <div className="ask-form-container" style={{marginLeft:"50px"}}>
                        <h1>Post your thought here</h1>
                        <label htmlFor="post">
                            <h4>Post Title</h4>
                            <p>be a specific and imagine a Title </p>
                            <input type="text" name="post" id="post" onChange={(e)=>setpostTitle(e.target.value)} placeholder="whats in your mind"></input>
                        </label>
                        <label htmlFor="post">
                        <h4>Post Experience</h4>
                        <textarea name="" placeholder="share your Experience" id="" cols="30" rows="10" onChange={(e)=>setpostExp(e.target.value)}></textarea>
                        </label>
                        
                        <label htmlFor="post">
                        <h4>Image</h4>
                        
                        <input type="file" name="myFile" id="post" multiple onChange={(e)=>handlefileUpload(e)} ></input>
                        </label>
                        
                    </div>
                    <input type="submit" value="post data" className="reviewbtn" style={{marginLeft:"50px"}}/>
                </form>

            </div>


        </div>
        </div>
    )

}
export default Post

function convertToBase64(file){
    return new Promise((resolve,reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        };
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })

}
