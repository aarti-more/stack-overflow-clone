import {useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import Friend from './Friend'

const Friendlist=()=>{
    const {id}=useParams();
    console.log(id);
    
    const userlist=useSelector(state=>state.currentUserReducer)
    
    return(
        
        <div>
              {    
                    userlist?.result.friend.map((user)=>(
                   <Friend user={user} key={user._id}/>
                   ))
        
                    }  
                     
         </div>
           
        )
}
export default Friendlist