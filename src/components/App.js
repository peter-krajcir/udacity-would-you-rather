import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import "../style.css";
import Nav from "./Nav";
import Users from "./Users";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="container">
        <LoadingBar />
        <Nav />
        {this.props.loading ? null : <Users />}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    loading: Object.keys(users).length === 0
  };
}

export default connect(mapStateToProps)(App);
