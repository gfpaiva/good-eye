import React from 'react';

import './QuestionAnswer.scss';

const QuestionAnswer = ({action, disabled}) => (
	<div className="question__answer">
		<button className="question__answer-btn question__answer-btn--incorrect" onClick={e => !disabled && action(e, false)}>Incorrect</button>
		<button className="question__answer-btn question__answer-btn--correct" onClick={e => !disabled && action(e, true)}>Correct</button>
	</div>
);

export default QuestionAnswer;
