import { combineReducers } from "redux";
import { posts } from "./reducers/posts";

const RootReducer = combineReducers({
  posts,
});

export default RootReducer;
