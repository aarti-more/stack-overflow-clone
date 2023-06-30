import React from "react";
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import Rightsidebar from '../../components/Rightsidebar/Rightsidebar'
import Homemainbar from '../../components/Homemainbar/Homemainbar'
//import '../../App.css'
const Home=()=>{
    return(
        // <h1>ddddddddddddd</h1>
        <div className="homecontainer1">
             {<Leftsidebar /> }
             <div className="homecontainer2">
             <Homemainbar/>
             { <Rightsidebar/> }
                
             </div>
           
         </div>
    );
}
export default Home