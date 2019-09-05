import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    return (
      <div>
        Users
        <ul>
          {Object.keys(this.props.users).map(key => (
            <li key={key}>{this.props.users[key].name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users
  };
}
export default connect(mapStateToProps)(Users);
