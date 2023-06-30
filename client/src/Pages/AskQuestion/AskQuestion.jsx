import React,{useState} from "react";
import './AskQuestion.css'
import {useDispatch ,useSelector} from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { askQuestion } from "../../actions/question.js";
const AskQuestion = () => {
    const [questionTitle,setquestionTitle]=useState('')
    const [questionBody,setquestionBody]=useState('')
    const [questionTags,setQuestionTags]=useState('')
    const dispatch =useDispatch()
    const User=useSelector((state)=>(state.currentUserReducer))
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        //console.log({questionTitle,questionBody,questionTags})
        dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted:User.result.name,userId:User.result._id},navigate))
    }
    const handleEnter=(e)=>{
        if(e.key==='Enter')
        {
            setquestionBody(questionBody + "\n")
        }
    }
    return (
        <div className="askquestion">
            <div className="askquestion-container">
                <h1>Ask A Public Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className="ask-form-container">
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p>be a specific and imagine a question you'r asking for</p>
                            <input type="text" id="ask-ques-title" onChange={(e)=>setquestionTitle(e.target.value)} placeholder="e.g is there R function for finding index element of vector"></input>
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p>include all the information someone would answer to your question</p>
                            <textarea  id="ask-ques-body" cols="30" rows="10" onChange={(e)=>setquestionBody(e.target.value)} onKeyPress={handleEnter}></textarea>
                        </label>
                        <label htmlFor="ask-ques-tags">
                        <h4>Tags</h4>
                        <p>add up to 5 tags to describe what question is about</p>
                        <input type="text" id="ask-ques-tags" onChange={(e)=>setQuestionTags(e.target.value.split(" "))} placeholder="e.g (xml typescript react)"></input>
                        </label>
                        
                    </div>
                    <input type="submit" value="Review your question" className="reviewbtn"/>
                </form>

            </div>


        </div>
    )

}
export default AskQuestion