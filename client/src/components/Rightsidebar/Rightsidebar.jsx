import React from "react";
import Widget from './Widget';
import WidgetTags from './WidgetTags';
import '../Rightsidebar/Rightbar.css'

const Rightsidebar=()=>{
    return (
        
        <aside className="Rightsidebar">
            <Widget />
             <WidgetTags /> 
        </aside>
    );

}
export default Rightsidebar