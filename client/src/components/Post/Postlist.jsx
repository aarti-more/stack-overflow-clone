import React from "react";
import Postdata from "./Postdata";
//import data from "./data"
//import Postvideo from "./Postvideo"
//import { useParams } from "react-router-dom";
const Postlist=({postlist})=>{

    return(
        <>
        {
            postlist.map((post)=>(
            <Postdata post={post} key={post._id}/>
            
            ))

            }
           
        </>
    )
}
export default Postlist