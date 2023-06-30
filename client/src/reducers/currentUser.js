const currentUserReducer = (state=null,action)=>{

    switch(action.type)
    {
        case 'FETCH_CURRENT_USER':
            return action.payload;
           
        case "POST_FRIEND":
             return{...state};
      // case "FETCH_ALL_FRIENDS":
        //     return {...state,data:action.payload}
        default:
            return state;

    }
}
export default currentUserReducer;