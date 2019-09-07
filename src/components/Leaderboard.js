import React from "react";
import { connect } from "react-redux";
const Leaderboard = props => {
  return (
    <div>
      <h3>Leaderboard</h3>
      <div className="leaderboard">
        {props.userIds.map((userId, index) => {
          const user = props.users[userId];
          const userAnswers = Object.keys(user.answers).length;
          const userQuestions = user.questions.length;
          const userTotal = userAnswers + userQuestions;
          return (
            <div key={userId} className="leaderboard-item">
              <div className="leaderboard-item-rank">{index + 1}.</div>
              <div className="leaderboard-item-name">{user.name}</div>
              <div className="leaderboard-item-pic">
                <img
                  className="leaderboard-item-img-avatar"
                  src={user.avatarURL}
                  alt="avatar"
                />
              </div>
              <div className="leaderboard-item-stats">
                <div className="leaderboard-item-answered">
                  <span className="leaderboard-item-stats-label">
                    Answered Questions:
                  </span>
                  <span className="leaderboard-item-stats-value">
                    {userAnswers}
                  </span>
                </div>
                <div className="leaderboard-item-questions">
                  <span className="leaderboard-item-stats-label">
                    Created Questions:
                  </span>
                  <span className="leaderboard-item-stats-value">
                    {userQuestions}
                  </span>
                </div>
                <div className="leaderboard-item-total">
                  <span className="leaderboard-item-stats-label">
                    Total Score:
                  </span>
                  <span className="leaderboard-item-stats-value">
                    {userTotal}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users).sort(
      (a, b) =>
        users[b].questions.length +
        Object.keys(users[b].answers).length -
        (users[a].questions.length + Object.keys(users[a].answers).length)
    ),
    users
  };
}

export default connect(mapStateToProps)(Leaderboard);
