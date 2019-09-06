import React from "react";
import { NavLink } from "react-router-dom";

const QuestionList = props => {
  return (
    <div>
      {props.displayOnlyIds.map(id => {
        const author = props.users[props.questions[id].author].name;
        return (
          <div className="question" key={id}>
            <div className="question-author">
              <b>{author}</b> asks:
            </div>
            <div className="question-text">
              <b>Would you rather - </b>
              <i>{props.questions[id].optionOne.text}</i> or{" "}
              <i>{props.questions[id].optionTwo.text}</i>?
            </div>
            <div className="question-view-container">
              <NavLink to={`/questions/${id}`} className="question-view">
                View Question
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionList;
