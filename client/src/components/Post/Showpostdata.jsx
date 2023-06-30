import React from "react"
import { useSelector } from "react-redux"
import Postlist from './Postlist'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchAllPosts } from "../../actions/post"
//import { useParams } from "react-router-dom"
//import { useParams } from "react-router-dom"
//import Postdata from "./Postdata"
//import { fetchUsers } from "../../actions/user"

const Showpostdata=()=>{
    
    const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchAllPosts())
   // dispatch(fetchUsers())
  },[dispatch]) 
    const list=useSelector(state=>state.postsReducer);
    
    //const {id}=useParams
     return(
       <div style={{paddingTop:"50px"}}>
        <h1 style={{textAlign:"center"}}>view all post</h1>
        
                 {list.data === null ? <h4>Loading...</h4> :
                     <>
                        
                         <Postlist postlist={list.data} key={list.data._id} />
                        
                     </>
                 }

            
         </div>
     )
}
export default Showpostdata