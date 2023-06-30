import React from "react";
import './Rightbar.css'
import comment from '../../assets/comment.png'
import logo from '../../assets/logo.png'
import pen from '../../assets/pen-solid.svg'

const Widget = () => {
    return (
        <div className="widget">
            <h4 style={{ color: "black" }}>The OverFlow Blog</h4>
            <div className="rightsidebar-div1">
                <div className="rightsidebar-div2">
                    <img src={pen} alt="pen" width='18' />
                    <p>Obseravibility is the key to the future of software(and your Devp career)</p>
                </div>
                <div className="rightsidebar-div2">
                    <img src={pen} alt="pen" width='18' />
                    <p>podcats-374: how your screen more valueable</p>
                </div>
            </div>
            <h4 style={{ color: "black" }}>Feature on Meta</h4>
            <div className="rightsidebar-div1">
                <div className="rightsidebar-div2">
                 <img src={comment} alt="comment" width='18'/>
                 <p>Review queue workflows-finalrelease...</p>
                </div>
                <div className="rightsidebar-div2">
                <img src={comment} alt="comment" width='18' style={{paddingLeft:"0%"}}/>
                 <p>please welcome value associate ang jvfvf vff</p>
                </div>
                <div className="rightsidebar-div2">
                <img src={logo} alt="logo" width='18'/>
                 <p>outdated answer:accepted answre is now unpinned on stack ovweflow</p>
                </div>
                </div>
             <h4>Hot meta Posts</h4>
             <div className="rightsidebar-div1">
                <div className="rightsidebar-div2">
                <p>38 why was spam flag declined,yet the question marked as spam?</p>
                </div>
                <div className="rightsidebar-div2">
                <p>20 what is the best course of action when user has high enough rep to situation</p>
                </div>
                <div className="rightsidebar-div2">
                <p>14 is a link to "how to ask" help page a useful comment?</p>
                </div>
            </div>

        </div>
    );
}
export default Widget