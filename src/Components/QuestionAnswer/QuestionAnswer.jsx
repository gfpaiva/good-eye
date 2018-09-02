import React from 'react';

import './QuestionAnswer.scss';
import Button from '../Button/Button';

const QuestionAnswer = ({action, disabled}) => (
	<div className="question__answer">
		<Button
			className="question__answer-btn question__answer-btn--incorrect"
			onClick={e => !disabled && action(e, false)}
		>
			Incorrect
		</Button>

		<Button
			className="question__answer-btn question__answer-btn--correct"
			onClick={e => !disabled && action(e, true)}
		>
			Correct
		</Button>
	</div>
);

export default QuestionAnswer;
