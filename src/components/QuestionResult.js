import React from "react";
import { connect } from "react-redux";
import QuestionResultOptionDetail from "./QuestionResultOptionDetail";

const QuestionResult = props => {
  const { author, optionOne, optionTwo } = props.question;
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOneVotes = optionOne.votes.length;
  const optionTwoVotes = optionTwo.votes.length;
  return (
    <div>
      <div className="question-author">
        Asked by <b>{props.users[author].name}</b>:
      </div>
      <div className="question-text">
        <div>
          <b>Results:</b>
        </div>
        <QuestionResultOptionDetail
          text={optionOne.text}
          optionVotes={optionOneVotes}
          totalVotes={totalVotes}
          yourVote={optionOne.votes.includes(props.authedUser)}
        />
        <QuestionResultOptionDetail
          text={optionTwo.text}
          optionVotes={optionTwoVotes}
          totalVotes={totalVotes}
          yourVote={optionTwo.votes.includes(props.authedUser)}
        />
      </div>
    </div>
  );
};

function mapStateToProps({ authedUser, users, questions }, props) {
  return {
    question: questions[props.qid] ? questions[props.qid] : null,
    users,
    authedUser
  };
}

export default connect(mapStateToProps)(QuestionResult);
