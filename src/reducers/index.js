import { combineReducers } from "redux";
import users from "./users";
import authedUser from "./authedUser";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  users,
  authedUser,
  loadingBar: loadingBarReducer
});
