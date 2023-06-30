const postsReducer=(state={data:null},action)=>{
    switch(action.type)
    {
        case "POST_DATA":
        return{...state}
        // return {...state,data:action.payload}
        //  case "POST_FRIEND":
        //  return{...state}
        case "FETCH_ALL_POSTS":
        return{...state,data:action.payload}
        default:
        return state
    }
}
export default postsReducer