import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import "../style.css";
import Nav from "./Nav";
import Users from "./Users";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import NotFound from "./NotFound";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading ? null : (
              <div>
                {this.props.authedUser === null ? (
                  <Users />
                ) : (
                  <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/new-question" exact component={NewQuestion} />
                    <Route path="/leaderboard" exact component={Leaderboard} />
                    <Route component={NotFound} />
                  </Switch>
                )}
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    loading: Object.keys(users).length === 0,
    authedUser
  };
}

export default connect(mapStateToProps)(App);
