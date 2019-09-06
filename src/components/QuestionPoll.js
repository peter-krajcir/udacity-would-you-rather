import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";

class QuestionPoll extends Component {
  state = {
    option: "optionOne"
  };

  handleChange = e => {
    this.setState({
      option: e.target.value
    });
  };

  handleSubmit = () => {
    this.props.dispatch(
      handleSaveQuestionAnswer(this.props.qid, this.state.option)
    );
  };

  render() {
    const { author, optionOne, optionTwo } = this.props.question;
    return (
      <div>
        <div className="question-author">
          <b>{this.props.users[author].name}</b> asks:
        </div>
        <div className="question-text">
          <div className="question-poll-heading">
            <b>Would you rather ...</b>
          </div>
          <div className="question-poll-element">
            <input
              type="radio"
              name="option"
              value="optionOne"
              id="optionOne"
              checked={this.state.option === "optionOne"}
              onChange={this.handleChange}
            />
            <label htmlFor="optionOne">
              <i>{optionOne.text}</i>
            </label>
          </div>
          <div className="question-poll-element">
            <input
              type="radio"
              name="option"
              value="optionTwo"
              id="optionTwo"
              checked={this.state.option === "optionTwo"}
              onChange={this.handleChange}
            />
            <label htmlFor="optionTwo">
              <i>{optionTwo.text}</i>
            </label>
          </div>
          <button onClick={this.handleSubmit} className="question-poll-submit">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  return {
    question: questions[props.qid] ? questions[props.qid] : null,
    users,
    authedUser
  };
}

export default connect(mapStateToProps)(QuestionPoll);
