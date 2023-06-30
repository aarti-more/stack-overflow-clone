//import React, { useState } from "react";
import { NavLink} from 'react-router-dom'
//import Homemainbar from "../Homemainbar/Homemainbar";
//import Homemainbar from "../Homemainbar/Homemainbar";
import '../Homemainbar/Homemainbar.css';

import './Leftsidebar.css'
import { useSelector } from 'react-redux';



const Leftsidebar=()=>{
    
    

const user=useSelector((state)=>state.currentUserReducer)
const id=user?.result?._id
    return(
        
<>
<div className="leftsidebar" >
   
 
        <nav className="side-nav" >
        
       
       
        <NavLink to='/' className="side-nav-link" activeClassName="active">
        <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
        <div><p>Public</p></div>
        <NavLink to='/Questions' className="side-nav-link" activeClassName="active">
        <p style={{paddingLeft:"10px"}}>Questions</p>
        </NavLink>
        <NavLink to='/Tags' className="side-nav-link" activeClassName="active">
        <p>Tags</p>
        </NavLink>
        <NavLink to='/Users' className="side-nav-link" activeClassName="active">
        <p>Users</p>
        </NavLink>
        <NavLink to='/Post' className="side-nav-link" activeClassName="active">
        <p>Add Post</p>
        </NavLink>
        <NavLink to={`/SocialMedia/${id}`} className="side-nav-link" activeClassName="active">
        <p>View Post</p>
        </NavLink> 
        
         <NavLink to={`/Friendlist/${id}`} className="side-nav-link" activeClassName="active">
        <p>FriendList</p>
        </NavLink>  
        
        
        </div>
    
        </nav>

       
        
    </div>

    <style jsx>{`
    

    `}</style>
    

    </>
)



}

    

export default Leftsidebar

