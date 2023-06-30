import React from "react";
import './Rightbar.css'
const WidgetTags = () => {
    const tags = ['c', 'css', 'HTML', 'PHP', 'JAVA', 'Javascript', 'Python', 'C++', 'Nodejs', 'Express', 'firebase']
    return (
        <div className="widget-tags">
            <h4>watched Tags</h4>
            <div className="widget-tags-div">
            {
                tags.map((tag)=>(
                    <p key={tag}>{ tag}</p>

                ))

                
            }
            </div>
        </div>
    )
}
export default WidgetTags