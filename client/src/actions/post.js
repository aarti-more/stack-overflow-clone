import * as api from '../api'
export const PostData = (postdata, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postData(postdata);
        dispatch({ type: "POST_DATA", payload:data })
        dispatch(fetchAllPosts());
        navigate('/SocialMedia/:id')
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllPosts=()=>async(dispatch)=>{
    try{
    const { data }=await api.getAllPosts();
    dispatch({ type: "FETCH_ALL_POSTS", payload:data })
    }catch(error){
        console.log(error)
    }
}

export const VotePost=(id,value,userId)=>async(dispatch)=>{
    try{
    //const {data}=await api.votePost(id,value,userId)
    await api.votePost(id,value,userId);
    dispatch(fetchAllPosts())
    }catch(error){
        console.log(error)  
    }
}

export const PostFriend=(frienddata)=>async(dispatch)=>{
    try{
    const {id,friendAdded,friendId}=frienddata
    const { data }=await api.postFriend(id,friendAdded,friendId)
    
    dispatch({type:"POST_FRIEND",payload:data})
    //dispatch(fetchAllPosts())
    
    }catch(error){
    console.log(error)
    }
}

export const DeleteFriend=(id,friendId)=>async(dispatch)=>{
    try{
//const{data}=await api.deleteAnswer(id,answerId,noOfAnswers)
await api.deleteFriend(id,friendId)

 dispatch(fetchAllPosts())
    }catch(error){
       console.log(error) 
    }
}

// export const fetchAllfriends=(id)=>async(dispatch)=>{
//     try{
//     const { data }=await api.getAllList(id)
//     dispatch({type:"FETCH_ALL_FRIENDS",payload:data})
//     }catch(error){
//         console.log(error)
//     }
// }