import React,{useState} from "react";
import moment from 'moment'
import { useSelector , useDispatch} from "react-redux";
import { useParams , Link,useNavigate ,useLocation} from "react-router-dom";
//import {useDispatch} from 'react-router-dom'
import uparrow from '../../assets/uparrow.png'
import downarrow from '../../assets/downarrow.png'
import Avatar from '../../components/Avatar/Avatar'
import './QuestionsDetails.css'
import DisplayAnswers from "./DisplayAnswers";
import { postAnswer ,deleteQuestion, voteQuestion } from "../../actions/question.js";
import copy from 'copy-to-clipboard'

const QuestionsDetails=()=>
{
    const{id}=useParams()
    console.log(id)
    const questionlist=useSelector(state=>state.questionsReducer);
    
    // var questionlist = [{
    //     _id: '1',
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
    //     _id: '2',
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
    //     _id: '3',
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
    const [Answer,setAnswer]=useState('')
    const dispatch=useDispatch()
    const User=useSelector((state)=>(state.currentUserReducer))
    const location=useLocation()
    const Navigate=useNavigate()
    //const url='http://localhost:3000'
    const url='https://stack-overflow-aarti.netlify.app'
    const handlePostAns=(e,answerLength)=>{
        e.preventDefault()
        if(User===null)
        {
            alert('user must login or signup before posting answer')
        }
        else{
            if(Answer==='')
            {
                alert('Enter an asnwer before submitting')
            }
            else{
            dispatch(postAnswer({id,noOfAnswers:answerLength+1,answerBody:Answer,userAnswered:User.result.name,userId:User.result._id}))
            }
        }
        //console.log({id,noOfAnswers:answerLength+1,answerBody:Answer,userAnswered:User.result.name})
    }
    const handleShare=()=>{
        
        copy(url+location.pathname)
        alert('url copied: '+url+location.pathname)
    }
    const handledelete=()=>{
        dispatch(deleteQuestion(id,Navigate))
    }
    const handleUpVote=()=>{
        dispatch(voteQuestion(id,'upVote',User.result._id))
    }
    const handleDownVote=()=>{
        dispatch(voteQuestion(id,'downVote',User.result._id))
    }
    
    return(
        <div className="question-details-page">
            {
                questionlist.data === null ?
                <h1>Loading...</h1> :
                <>
                {
                questionlist.data.filter(question => question._id === id).map(question=>(
                    <div key={question._id}>
                        <section className="question-details-container">
                            <h1>{question.questionTitle}</h1>
                            <div className="question-details-container-2">
                                <div className="question-votes">
                                    <img src={uparrow} alt="uparrow" className="vote-icon" width='18' onClick={handleUpVote}/>
                                    <p>{question.upVote.length-question.downVote.length}</p>
                                    <img src={downarrow} alt="downarrow" className="vote-icon"  width='18' onClick={handleDownVote} />
                                </div>
                                <div style={{width:"100%"}}>
                                    <p className="question-body">{question.questionBody}</p>
                                </div>
                                <div className="question-details-tags">  
                                    {
                                        question.questionTags.map(tag=>(
                                            <p key={tag}>{tag}</p>
                                        ))
                                    }

                                </div>
                                <div className="question-action-user">
                                    <div style={{/*paddingTop:"70px",position:"absolute",left:"22%",marginTop:"10px"*/}}>
                                        <button type="button" onClick={handleShare}>Share</button>
                                        {
                                            User?.result?._id===question?.userId &&(
                                                <button type="button" onClick={handledelete}> delete</button>
                                            )
                                        }
                                        
                                    </div>
                                    <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                        <p>askedon {moment(question.askedOn).fromNow()}</p>
                                        <Link to={`/Users/${question.userId}`} className="user-link">
                                            <Avatar>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                        </Link>
                                        <div>{question.userPosted}</div>

                                    </div>
                                </div>

                            </div>

                        </section>
                        {
                            question.noOfAnswers!==0 &&
                             (
                                 <section>
                                    <h3>{question.noOfAnswers} Answers</h3>
                                   <DisplayAnswers key={question._id} question={question} handleShare={handleShare}/>
                                 </section>

                             )
                        }
                        <section className="post-ans-continer">
                            <h3>Your Answer</h3>
                            <form onSubmit={(e)=>{handlePostAns(e,question.answer.length)}}>
                                <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setAnswer(e.target.value)}></textarea><br/>
                                <input type="submit" id="" className="post-ans-btn" value="Post your answer"/>
                            </form>
                            <p>
                                Browse other question tagged {question.questionTags.map(tag=>(
                                    <Link to='/Tags' key={tag} className="ans-tags" style={{textDecoration:"none",color:"#009dff"}}>
                                        {tag}
                                     </Link>
                                ))} or
                                <Link to='/AskQuestion' className="ask-question" style={{textDecoration:"none",color:"#009dff"}}>ask your own question</Link>
                            </p>
                        </section>
                    </div>

                )) 

                }
                </>

            }
            
        </div>
    )

}
export default QuestionsDetails