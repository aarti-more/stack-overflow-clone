import React from "react";
import Avatar from '../Avatar/Avatar'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import './Friend.css'

const Friend=({user})=>{
    
           
    return(
        
        <div className="avatar_friendname">
        <div className="leftbar-avatar"> 
        <Leftsidebar/>
        <div className="avatar">
        {<Avatar backgroundColor="#009dff" px="5px" py="20px" fontSize="20px"  borderRadius="50%" >{user.friendAdded.charAt(0).toUpperCase()}</Avatar>}
        <div className="addfriend">
        {<h2 >{user.friendAdded}</h2>}
        </div>
        </div>
        </div>
        </div>
        
    )
        }
export default Friend