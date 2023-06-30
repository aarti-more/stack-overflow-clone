import { useEffect } from 'react';

import {BrowserRouter as Router} from 'react-router-dom' ;
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'

import './App.css'
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import {fetchUsers} from './actions/user'
import Chat from './components/Chatbot/Chat'
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchUsers())
  },[dispatch]) //whenever we use dispatch then this useEffect run 
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
      <Chat/>
      <AllRoutes/>
          
      </Router> 
        

    </div>
  );
}
export default App;
