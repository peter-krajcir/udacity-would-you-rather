import React from "react";
import { connect } from "react-redux";
import UserGreetings from "./UserGreetings";
import { setAuthedUser } from "../actions/authedUser";
import { NavLink } from "react-router-dom";

const Nav = props => {
  const handleLogout = () => {
    props.dispatch(setAuthedUser(null));
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-question" activeClassName="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeClassName="active">
            Leaderboard
          </NavLink>
        </li>
        <li>
          {props.authedUser !== null && (
            <UserGreetings
              name={props.users[props.authedUser].name}
              avatarURL={props.users[props.authedUser].avatarURL}
            />
          )}
        </li>
        <li>
          {props.authedUser === null ? (
            "Not logged in"
          ) : (
            <span className="logoutLbl" onClick={handleLogout}>
              Logout
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser
  };
}

export default connect(mapStateToProps)(Nav);
