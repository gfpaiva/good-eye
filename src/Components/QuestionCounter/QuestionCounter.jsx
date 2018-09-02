import React from 'react';

import './QuestionCounter.scss';

const QuestionCounter = ({ current, total }) => (
		<span className="question__counter">
			{current + 1} – {total}
		</span>
);

export default QuestionCounter;
