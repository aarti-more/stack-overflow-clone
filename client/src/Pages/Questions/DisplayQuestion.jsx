import React from "react";
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import Rightsidebar from '../../components/Rightsidebar/Rightsidebar'
import QuestionsDetails from './QuestionsDetails'
import '../../App.css'
const DisplayQuestion=()=>
{
    return(
        
         <div className="homecontainer1">
              <Leftsidebar /> 
              <div className="homecontainer2">
               <QuestionsDetails /> 
              <Rightsidebar/> 
                
              </div>
           
          </div>
    )
}
export default DisplayQuestion