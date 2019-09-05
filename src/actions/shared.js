import { _getUsers } from "../_DATA";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return Promise.all([_getUsers()]).then(([users]) => {
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser());
      dispatch(hideLoading());
    });
  };
}
