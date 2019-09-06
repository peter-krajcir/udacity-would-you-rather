import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionList from "./QuestionList";

class Dashboard extends Component {
  state = {
    questionType: "unanswered"
  };

  handleClick = type => {
    this.setState({
      questionType: type
    });
  };
  render() {
    return (
      <div>
        <ul className="question-type-select">
          <li
            className={
              this.state.questionType === "unanswered" ? "active" : null
            }
            onClick={() => {
              this.handleClick("unanswered");
            }}
          >
            Unanswered Questions
          </li>
          <li
            className={this.state.questionType === "answered" ? "active" : null}
            onClick={() => {
              this.handleClick("answered");
            }}
          >
            Answered Questions
          </li>
        </ul>
        {this.state.questionType === "unanswered" ? (
          <QuestionList
            users={this.props.users}
            questions={this.props.questions}
            displayOnlyIds={this.props.unansweredQuestionsIds}
          />
        ) : (
          <QuestionList
            users={this.props.users}
            questions={this.props.questions}
            displayOnlyIds={this.props.answeredQuestionsIds}
          />
        )}
      </div>
    );
  }
}

function mapPropsToState({ authedUser, users, questions }) {
  const answeredQuestionsIds = Object.keys(questions)
    .filter(
      questionId =>
        questions[questionId].optionOne.votes.includes(authedUser) ||
        questions[questionId].optionTwo.votes.includes(authedUser)
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  const unansweredQuestionsIds = Object.keys(questions)
    .filter(
      questionId =>
        !questions[questionId].optionOne.votes.includes(authedUser) &&
        !questions[questionId].optionTwo.votes.includes(authedUser)
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  return {
    authedUser,
    users,
    questions,
    answeredQuestionsIds,
    unansweredQuestionsIds
  };
}

export default connect(mapPropsToState)(Dashboard);
