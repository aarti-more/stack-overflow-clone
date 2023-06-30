import './postdata.css'
import { useSelector,useDispatch} from 'react-redux'
import { PostFriend ,DeleteFriend } from '../../actions/post.js'
import { Link, useParams } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'


const Postdata = ({ post }) => {
  
  const {id}=useParams();
  const dispatch=useDispatch()
  var ext = post.myFile[0].split(';')[0].split('/')[0]

  const user=useSelector(state=>state.currentUserReducer);
   const handleAddfriend=()=>{
    
           (dispatch(PostFriend({id:user.result._id,friendAdded:post.userPosted,friendId:post.userId})))   
           alert("friend is added successfully. To see added friend in friend list LogOut and then LogIn again ");
         
    }  
      
    
    
    const deleteFriend=(friendId)=>{

    dispatch(DeleteFriend(id,{friendId}))
    }
  
  return (
  
    <div className='main-container'>
    <div className="main-div">

      <div className='avatar-userposted-name-div'>
       <Avatar backgroundColor="#009dff" px="5px" py="20px" fontSize="20px"  borderRadius="50%" >{post.userPosted.charAt(0).toUpperCase()}</Avatar> 
       
       <div className='userposted-name'>
       <p>{post.userPosted}</p>
       
      </div> 
      
      </div>     
      <div className="display-post-title">
         <h3>Title</h3>
        {<p>{post.postTitle}</p>}
      </div>
      <div className='display-post-exp'>
        <h3>Experience</h3>
        {<p>{post.postExp}</p>}
      </div>


      <div className='mediafile-with-mediabuttons'>
        <div className="mediafile">

          <h3>Media</h3>
          {ext === "data:image" ?

            <img src={post.myFile} alt="" type="image" style={{ height:"20%",width: "10%" }} className='image' ></img> :


            <video width="320" height="240" controls>
              <source src={post.myFile} ></source>

            </video>

          }
        </div>
        <div className='mediabuttons'>
          
          <Link to={post._id}>To Like , Dislike and Share Click here </Link>
            
        </div>

      </div>

      <div>
    </div>
    <div> 
      
  </div>
      
    </div>
</div>
 
  )
}

export default Postdata
