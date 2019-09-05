import React from "react";

const UserGreetings = ({ name, avatarURL }) => {
  return (
    <span>
      Hello, {name}!{" "}
      <img className="avatar-small" src={avatarURL} alt="avatar" />
    </span>
  );
};

export default UserGreetings;
