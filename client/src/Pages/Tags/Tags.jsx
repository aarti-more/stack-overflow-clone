import React from "react";
import Leftsidebar from "../../components/Leftsidebar/Leftsidebar";
import Taglist from "./Taglist";
import './Tags.css'

const Tags = ()=>{
    const tagList=[{
        id:1,
        tagName:"javascript",
        tagDesc:"for questions regarding programming in ECMAScript(javascript/js) and it's varoius implementation (exclusive)"
        },
        {
            id:2,
            tagName:"python",
            tagDesc:"python is multi-paradigm , dynamically typed,multipurpose programming language"
        },
        {
            id:3,
            tagName:"c#",
            tagDesc:"c# is a high level , statically typed, multi-paradigm programming language"
        },
        {
            id:4,
            tagName:"java",
            tagDesc:"java is a high level , object oriented programming language"
        },
        {
            id:5,
            tagName:"php",
            tagDesc:"php is widely used open source,general purpose,multi-paradigm,dynamically typed and interpreted scripting language"
        },
        {
            id:6,
            tagName:"html",
            tagDesc:"html is widely use to design web pages "
        },
        {
            id:7,
            tagName:"android",
            tagDesc:"android is Google's mobile operating system,used for developing digital divices"
         },
         {
            id:8,
            tagName:"css",
            tagDesc:"css is cascading style sheet , used to describing look and formatting html document"
         },
         {
            id:9,
            tagName:"Reactjs",
            tagDesc:"React is javascript library use to build user interfaces"
         },
         {
            id:10,
            tagName:"nodejs",
            tagDesc:"nodejs is an event based , non blocking,asynchronous I/O runtime that uses google VB  javascript engine"

         }

]
    return(
        <div className="homecontainer1">
        {<Leftsidebar/>}
        <div className="homecontainer2">
        <h1 className="tags-h">Tags</h1>
        <p className="tags-p">Tag is a Keyword that catagories your question with other,similar question</p>
        <p className="tags-p">Using the right tag makes it easier to other for find and answer your question</p>
        <div className="tag-list-container">
            {
                tagList.map((tag)=>{
                    return <Taglist tag={tag} key={tagList.id}/>
                })
            }
        
        </div>
        </div>
        </div>
    )
}
export default Tags