import React, { Component } from 'react';
import Steps from '../../Components/Step/Step';

import './Result.scss';

const calculateAnswers = answers => answers.reduce((prev, curr, idx) => {
	if(!answers[idx]) return prev + 1;
	return prev;
}, 0);

class Result extends Component {

	componentDidMount() {
		window.setTimeout(this.props.action, 4000);
	}

	render() {
		const { transition, answers, english } = this.props;

		return (
			<Steps
				name="result"
				title={english ? `You got ${calculateAnswers(answers)} out of ${answers.length}. <span class="result__text">Here are the results.</span>` : `Você acertou ${calculateAnswers(answers)} de ${answers.length}. <span class="result__text">Aqui estão os resultados.</span>`}
				{...{transition}}
			/>
		);
	}
};

export default Result;
