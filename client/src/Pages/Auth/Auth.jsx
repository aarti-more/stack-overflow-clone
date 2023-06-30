import React,{useState} from "react";
import '../../Auth.css'
import logo from '../../assets/logo.png'
import AboutAuth from "../Auth/AboutAuth";
import { signup ,login} from "../../actions/auth";
import {useDispatch} from 'react-redux'
import  {useNavigate} from "react-router-dom";

const Auth=()=>{
    const [isSignup,setIsSignup]=useState(false);
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleswitch=()=>{
        
        setIsSignup(true) 
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!email || !password)
         {
         alert("to continue enter email and password") 
         }
        if(isSignup){
            if(!name){
                alert("to continue enter name")
                
            }
            
            dispatch(signup({name,email,password},navigate))
            
        }else{
            dispatch(login({email,password},navigate))
        }
        // if(!email && !password)
    
        // alert("to continue enter email and password") 
         }
        
        
        console.log({name,email,password})
    
    return(
        <div>
             {isSignup && <AboutAuth />}
            <section className="authsection">
               
            <div className="authcontainer">
            {!isSignup && <img src={logo} alt="stack overflow" className="loginlogo" width='10'/>}
                    <form onSubmit={handleSubmit}>
                        {isSignup &&
                            <label htmlFor="name">
                                <h4 style={{float:"left"}}>Display Name</h4>
                                <input type="text" name='name' id='name' onChange={(e)=>setName(e.target.value)}/>
                            </label>
                        }
                        <label htmlFor="email">
                            <h4 style={{float:"left"}}>Email</h4>
                            <input type="email" name='email' id='email' onChange={(e)=>setEmail(e.target.value)} />
                        </label>
                        <label htmlFor="password" style={{paddingRight:"30px"}}>
                            <div style={{display:"flex"}}>
                                <h4 style={{float:"left"}}>Password</h4>
                                {!isSignup && <h4 style={{color:"blue"}}>forget password</h4>}
                            </div>

                            <input type="password" name='password' id='password' style={{minWidth:"190px"}} onChange={(e)=>setPassword(e.target.value)}/><br />
                            {isSignup && <pre><b>password must contain atleast eight character <br />including atleast 1 number and 1 character </b></pre>}
                        </label><br />
                        {isSignup && (
                            <label htmlFor="check" style={{display:"flex", justifyContent:"space-between"}}>
                                <input type="checkbox" name='check' id='check' style={{height:"1px"}}/>
                                <p style={{width:"200%",margin:"10px",textAlign:"justify"}}>Opt-in to receive occasional product updates, user research invitations,<br/>company announcements,and digests.</p>                            </label>
                        )}

                        <button type="submit" className="authbtn">{isSignup ? 'signup' : 'Log in'}</button>

                        {isSignup && <p style={{paddingRight:"10px"}}>"By clicking Sign up, you agree to our <span style={{color:"#009dff" }}>terms of <br/>service, privacy policy</span> and cookie policy"</p>}
                 </form>   
            <br/><br/>
            
           
            </div>
           
            {isSignup?"you have an account":"Don't have an account" }<br/><br/>
            <button type="button" className="handle-switch=btn" onClick={handleswitch}>{isSignup ? 'log in':'sign up'}</button>
            </section>
            

        </div>
        
    );
}
export default Auth