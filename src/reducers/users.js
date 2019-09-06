import {
  RECEIVE_USERS,
  SAVE_USER_QUESTION_ANSWER,
  SAVE_USER_QUESTION
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case SAVE_USER_QUESTION_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      };
    case SAVE_USER_QUESTION:
      return {
        ...state,
        [action.formattedQuestion.author]: {
          ...state[action.formattedQuestion.author],
          questions: state[action.formattedQuestion.author].questions.concat([
            action.formattedQuestion.id
          ])
        }
      };
    default:
      return state;
  }
}
