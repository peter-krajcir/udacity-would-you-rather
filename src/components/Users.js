import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Users extends Component {
  handleClick = () => {
    const selectedAuthedUser = this.select.value;
    // this.props.dispatch(setAuthedUser(selectedAuthedUser));
    this.props.setAuthedUser(selectedAuthedUser);
  };

  render() {
    return (
      <div className="box">
        <h2>Welcome to the Would You Rather App!</h2>
        <h4>Please sign in to continue</h4>
        <select ref={select => (this.select = select)}>
          {Object.keys(this.props.users).map(key => (
            <option key={key} value={key}>
              {this.props.users[key].name}
            </option>
          ))}
        </select>
        <div className="signinBtn">
          <button onClick={this.handleClick}>Sign in</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser
  };
}

const mapDispatchToProps = {
  setAuthedUser
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
