import { combineReducers } from "redux";
import authReducer from "./auth.js";
import currentUserReducer from "./currentUser"
import questionsReducer from "./questions"
import usersReducer from "./users"
import postsReducer from "./post";

export default combineReducers({
    authReducer,currentUserReducer,questionsReducer,usersReducer,postsReducer
})