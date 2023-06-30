import React from "react";
import {useSelector} from "react-redux"
import { useLocation , useNavigate } from 'react-router-dom'
import Questionlist from "./Questionlist";
import './Homemainbar.css'
//import { Link } from "react-router-dom";
//import Question from "./Question"
const Homemainbar = () => {

    const user=1;
    const Navigate=useNavigate();
    const questionlist=useSelector(state=>state.questionsReducer)
    
    //console.log(questionLis)
    // var questionlist = [{
    //     _id: 1,
    //     UpVotes: 3,
    //     downVotes:2,
    //     noOfAnswers: 2,
    //     questionTitle: "what is a function?",
    //     questionBody: "it mean to be",
    //     questionTags: ["java", "nodejs"],
    //     userPosted: "mano",
    //     userId:1,
    //     askedOn: "jan1",
    //     answer: [{
    //         answerBody:"answer",
    //         userAnswered:'kumar',
    //         answeredOn:"jan 2",
    //         userId:2,

    //     }]
    // },
    // {
    //     _id: 2,
    //     UpVotes: 3,
    //     downVotes:2,
    //     noOfAnswers: 0,
    //     questionTitle: "what is a function?",
    //     questionBody: "it mean to be",
    //     questionTags: ["java", "mongo"],
    //     userPosted: "mano",
    //     userId:2,
    //     askedOn: "jan1",
    //     answer: [{
    //         answerBody:"answer",
    //         userAnswered:'kumar',
    //         answeredOn:"jan 2",
    //         userId:2,

    //     }]

    // },
    // {
    //     _id: 3,
    //     UpVotes: 3,
    //     downVotes:2,
    //     noOfAnswers: 2,
    //     questionTitle: "what is a function?",
    //     questionBody: "it mean to be",
    //     questionTags: ["java", "php", "react"],
    //     userPosted: "mano",
    //     userId:3,
    //     askedOn: "jan1",
    //     answer: [{
    //         answerBody:"answer",
    //         userAnswered:'kumar',
    //         answeredOn:"jan 2",
    //         userId:2,

    //     }]


    // },
    // ]
    
     const askquestion = () => {
             if(user === null)
                 {
                     alert("To ask question you have to login");
                     Navigate("/Auth")
                 }else{
                     Navigate("/AskQuestion")
                 }
        
            
     }

    const location = useLocation()
    return (

        <div className="mainbar">
       

            <div className="mainbardiv1">
                {location.pathname === '/' ? <h4>Top Questions</h4> : <h4>All Questions</h4>}
                {/* <Link to='/Ask Question' className="askbtn">Ask Question</Link> */}
                <button  className="askbtn"  onClick={askquestion}>Ask Question</button>
            </div>
            <div className="mainbardiv2">
                {questionlist.data === null ? <h4>Loading...</h4> :
                    <>
                        <p>{questionlist.data.length} Questions</p>
                        <Questionlist questionlist={questionlist.data} />
                    </>
                }

            </div>
            
        </div>
        
    )
}

export default Homemainbar