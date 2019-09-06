import React from "react";

const QuestionResultOptionDetail = ({
  text,
  optionVotes,
  totalVotes,
  yourVote
}) => {
  const calcPerc = (currentValue, totalValue) => {
    return (currentValue / totalValue) * 100;
  };

  return (
    <div className="question-result-option">
      Would you rather <i>{text}</i>?
      <div className="question-result-option-sum">
        {optionVotes} voted for this option (
        {calcPerc(optionVotes, totalVotes).toFixed(2)}% of votes)
        {yourVote && (
          <div>
            <b>(You voted for this option)</b>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionResultOptionDetail;
