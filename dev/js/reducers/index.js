import { combineReducers } from "redux";
import UserReducer from "./reducer-user.js";

const allReducers = combineReducers({
  users: UserReducer
});

export default allReducers;
