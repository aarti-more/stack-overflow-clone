import React from "react";
//import { useLocation } from "react-router-dom";
import Leftsidebar from "../../components/Leftsidebar/Leftsidebar";
import UserList from './UserList'
import './Users.css'
const Users = () => {
    // const location=useLocation();
return(
    
    <div className='homecontainer1'>
        {<Leftsidebar/>}
        <div className='homecontainer2' style={{marginTop:"50px"}}>  
        
            <h1 style={{fontWeight:"400"}}>Users</h1>
            {/* location.pathname === '/Users'? */}
            <UserList/>:
            {/* <> 
            </> */}
        
        </div>

    </div>
)
}

export default Users