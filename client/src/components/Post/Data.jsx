import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import likebutton from '../../assets/likebutton.jpg'
import dislikebutton from '../../assets/dislike-button.jfif'
import { VotePost } from '../../actions/post.js'
import copy from 'copy-to-clipboard'
import './Data.css'
import Leftsidebar from '../Leftsidebar/Leftsidebar';

const Data = () => {
    const {id}=useParams();
    const User=useSelector((state)=>(state.currentUserReducer))
    const postlist = useSelector((state)=>(state.postsReducer))
    const dispatch=useDispatch()
    const handleLike=()=>{
   
           dispatch(VotePost(id,'Like',User.result._id))
         }
        
         const handleDislike =()=>{
            dispatch(VotePost(id,'disLike',User.result._id))
         }
        
         const handleShare=(myFile)=>{
            
         copy(myFile);
         alert('copied')
         }
    
    return (
        <div className='leftbar-postdetailpage'>
        <Leftsidebar/>
        <div className='post-details-page'>
        
            {
                postlist.data === null ? 
                <h1 style={{marginTop:"50px"}}>Loading...</h1>:
                
                <>
                
                {
                    postlist.data.filter((post) => post._id === id).map(post=>(
                        <div key={post._id}>
                            
                            <section className='post-details-container' style={{marginTop:"50px"}}>
                                <b>Title</b>
                                <p>{post.postTitle}</p>
                                
                            
                  
                            </section>
                            <div className="mediafile">
                     
                     <h3>Media</h3>  
                        
                    {  post.myFile[0].split(';')[0].split('/')[0] ==="data:image" ?
                    
                    <img src={post.myFile} alt="" type="image" style={{width:"30%"}} className='image' ></img> :
                   
    
                    <video width="320" height="240" controls>
                      <source src={post.myFile } ></source>
                      
                    </video>
                    
                    } 
                    <br/>
                    <div className='mediabuttons'>
                    
                <img src={likebutton} alt="likebutton" className="like-icon" width='18' onClick={handleLike}/>
                <p className='like-length'>{post.Like.length}</p><br/>
                 <img src={dislikebutton} alt="dislikebutton" className="dislike-icon" width='18' onClick={handleDislike}/>
                 <p>{post.disLike.length}</p>
                 <button type="button" className="share" onClick={(e)=>handleShare(post.myFile)}>share</button>
                        
                      </div>  
                   
                           
                    </div>

                        </div>

                    ))
                }
                </>



            }
            
        </div>
        </div>
    )
}

export default Data