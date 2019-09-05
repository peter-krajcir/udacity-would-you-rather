import React from "react";
import { connect } from "react-redux";
import UserGreetings from "./UserGreetings";
import { setAuthedUser } from "../actions/authedUser";

const Nav = props => {
  const handleLogout = () => {
    props.dispatch(setAuthedUser(null));
  };

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>New Question</li>
        <li>Leaderboard</li>
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
