import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionPoll from "./QuestionPoll";
import QuestionResult from "./QuestionResult";

class QuestionPage extends Component {
  render() {
    if (this.props.question === null) {
      return (
        <div>
          <h3>Question doesn't exist</h3>
        </div>
      );
    }

    return (
      <div className="question">
        {this.props.users[this.props.authedUser].answers.hasOwnProperty(
          this.props.qid
        ) ? (
          <QuestionResult qid={this.props.qid} />
        ) : (
          <QuestionPoll qid={this.props.qid} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const qid = props.match.params.id;
  return {
    question: questions[qid] ? questions[qid] : null,
    users,
    authedUser,
    qid
  };
}

export default connect(mapStateToProps)(QuestionPage);
