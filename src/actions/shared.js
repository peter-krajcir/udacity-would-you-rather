import { _getUsers, _getQuestions } from "../_DATA";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(setAuthedUser("sarahedo"));
        dispatch(hideLoading());
      }
    );
  };
}
