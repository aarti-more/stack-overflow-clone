import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Auth from './Pages/Auth/Auth';
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UsersProfile from "./Pages/UsersProfile/UsersProfile";
import Post from "./components/Post/post.js"
import Showpostdata from "./components/Post/Showpostdata";
//import SocialPost from "./components/Post/SocialPost";
import Data from './components/Post/Data.jsx';
import Friendlist from './components/Post/Friendlist.jsx'
//import FriendData from './components/Post/FriendData';
//import Postdata from "./components/Post/Postdata";
const AllRoutes =()=>{
    return(
        <div>
            
            <Routes>
            <Route  path='/' element={<Home/>} ></Route>
            <Route  path='/Auth' element={<Auth/>} ></Route>
            <Route  path='/Questions' element={<Questions/>}></Route>
            <Route   path='/AskQuestion' element={<AskQuestion/>}></Route>
            <Route   path='/Question/:id' element={<DisplayQuestion/>}></Route>
            <Route  path='/Tags' element={<Tags/>}></Route>
            <Route path='/Users' element={<Users/>}></Route>
            <Route path='/Users/:id' element={<UsersProfile/>}></Route>
            <Route path='/Post'  element={<Post/>}></Route>
             <Route path='/SocialMedia/:id'  element={<Showpostdata/>}></Route> 
             <Route path='/SocialMedia/:id/:id'  element={<Data/>}></Route> 
             <Route path='/Friendlist/:id'  element={<Friendlist/>}></Route> 

             {/* <Route path='/SocialApp'  element={<SocialPost/>}></Route>   */}
             {/* <Route path='/SocialMedia/addorremove/:id'  element={<FriendData/>}></Route>  */}

            </Routes>
            
        
        </div>
    );
}
export default AllRoutes