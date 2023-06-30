import React from "react";
import moment from 'moment'
import { Link } from "react-router-dom";
import './Homemainbar.css'
const Question = ({ question }) => {
    return (
        <div className="main-header">
            
             <div className="display-votes-ans">
                <p>{question.upVote.length-question.downVote.length}</p>
                <p>votes</p>
            </div>

            <div className="display-votes-ans">
                <p>{question.noOfAnswers}</p>
                <p>Answers</p>
            </div>
            <div className="mix">
            <div className="display-ans">
                <Link to={`/Question/${question._id}`}>{question.questionTitle}</Link>
            </div>
            <div className="display-tags-time">
                <div className="display-tags">
                    {
                        question.questionTags.map(tag => (
                            <p key={tag}>{tag}</p>
                        ))
                    }
                </div>
                <div className="askedon">
                    asked On {moment(question.askedOn).fromNow()} {question.userPosted}
                </div>

            </div> 
            </div>


        </div>
    )
}
export default Question