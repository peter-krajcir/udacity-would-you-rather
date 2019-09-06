import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    redirectToDashboard: false
  };
  handleSubmit = () => {
    const question = {
      optionOneText: this.inputOne.value,
      optionTwoText: this.inputTwo.value
    };
    this.props.dispatch(handleSaveQuestion(question));
    this.setState({
      redirectToDashboard: true
    });
  };

  render() {
    if (this.state.redirectToDashboard) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h3>Create New Question</h3>
        <div className="new-question">
          <h3>Would you rather ...</h3>
          <div>
            <input
              type="text"
              placeholder="Please type first option"
              ref={input => (this.inputOne = input)}
              className="new-question-input"
            />
          </div>
          <div className="new-question-input-divider">OR</div>
          <div>
            <input
              type="text"
              placeholder="Please type second option"
              ref={input => (this.inputTwo = input)}
              className="new-question-input"
            />
          </div>
          <div>
            <button className="new-question-submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(NewQuestion);
