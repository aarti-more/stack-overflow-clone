import axios from 'axios'

const API = axios.create({baseURL:"http://localhost:5000"})
//const API = axios.create({baseURL:"https://stack-overflow-aarti.onrender.com"})
//axios is used to create URL.axois is used to send request to backend.
//to send request to backend we add extra information in request for security purpose.to make application more secure.
//thats reason we are doing as follow:
  API.interceptors.request.use((req)=>{
   if(localStorage.getItem('profile')){
     req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}` //here headers contain string which contain localstoragedata with token.
     }
     return req;
 })

export const logIn =(authData)=>API.post('/user/login',authData);
export const signUp =(authData)=>API.post('/user/signup',authData);
export const postQuestion=(questionData)=>API.post('/questions/Ask',questionData);
export const getAllQuestions=()=>API.get('/questions/get');
export const postAnswer=(id,noOfAnswers,answerBody,userAnswered,userId)=>API.patch(`/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered,userId})
export const deleteQuestion=(id)=>API.delete(`/questions/delete/${id}`)
export const deleteAnswer=(id,answerId,noOfAnswers)=>API.patch(`/answer/delete/${id}`,{answerId,noOfAnswers})
export const voteQuestion=(id,value,userId)=>API.patch(`/questions/vote/${id}`,{value,userId})

export const fetchAllUsers=()=>API.get('/user/getAllUsers');
export const updateProfile=(id,updateData)=>API.patch(`/user/update/${id}`,updateData)

export const postData=(postdata)=>API.post('/post/data',postdata);
export const getAllPosts=()=>API.get('/post/get');

export const votePost=(id,value,userId)=>API.patch(`/post/vote/${id}`,{value,userId})

export const postFriend=(id,friendAdded,friendId)=>API.patch(`/friend/post/${id}`,{friendAdded,friendId});
export const deleteFriend=(id,friendId)=>API.patch(`/friend/delete/${id}`,friendId);
//export const getAllList=(id)=>API.get(`/friend/get/${id}`)