import React, { Component } from 'react';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';
import QuestionCounter from '../QuestionCounter/QuestionCounter';

import questionsEN from '../../Utils/questions';
import answersEN from '../../Utils/answers';

import './Questions.scss';

let answers = [];
let timer;

class Questions extends Component {

	state = {
		current: 0,
		total: questionsEN.length,
		questions: questionsEN,
		transition: 'in'
	}

	answer = (e, option) => {
		e && e.preventDefault();

		const newAnswers = answers.concat(option);
		answers = newAnswers;

		if(this.state.current === this.state.total -1) return this.props.action(null, answers);

		this.setState(() => {
			return { transition: 'out' };
		}, () => {
			window.setTimeout(() => {
				this.setState(prevState => ({
					transition: 'in',
					current: prevState.current + 1
				}))
			}, 500);
		});
	};

	componentDidMount() {
		if(this.props.showAnswers) {
			timer = window.setInterval(this.answer, 5000);
		}
	}

	componentWillUnmount() {
		clearInterval(timer);
	}

	render() {
		const { current, questions, total, transition } = this.state;
		const { showAnswers } = this.props;

		return (
			<article className={`step__container${this.props.transition ? ' step__transition' : ''}${showAnswers ? ' step__answers' : ''}`}>
				<p className={`step__title question__title ${transition ? `question__transition-${transition}` : ''}${showAnswers ? ' question__answers-results' : ''}`}>
					<span  dangerouslySetInnerHTML={{__html: questions[current]}}></span>

					{!showAnswers &&
						<QuestionCounter {...{current, total}} />
					}

					{showAnswers &&
						<span className="question__answers-results-text">{answersEN[current]}</span>
					}
				</p>

				{!showAnswers &&
					<div className={`step__footer`}>
						<QuestionAnswer action={this.answer} disabled={transition === 'out' ? true : false} />
					</div>
				}
			</article>
		);
	}
}

export default Questions;
