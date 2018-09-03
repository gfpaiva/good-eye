import React, { Component } from 'react';
import Header from '../Header/Header';
import Welcome from '../../Pages/Welcome/Welcome';
import Instructions from '../../Pages/Instructions/Instructions';
import Questions from '../Questions/Questions';
import Result from '../../Pages/Result/Result';
import Summary from '../../Pages/Summary/Summary';

import categoryStep from '../../Utils/categoryStep';

import './App.scss';

class App extends Component {
	state = {
		step: 0,
		transition: false,
		answers: [],
		english: true
	};

	goToStep = (e, answers, nextStep) => {
		e && e.preventDefault();

		if(nextStep) return this.setState({ step: nextStep });

		return this.setState(() => {
			let newState = { transition: true };
			if(answers) newState = { ...newState, answers }

			return newState;
		}, () => {
			window.setTimeout(() => {
				this.setState(prevState => ({
					transition: false,
					step: prevState.step + 1
				}))
			}, 500);
		})
	};

	changeLanguage = e => {
		e.preventDefault();

		this.setState(prevState => ({ english: !prevState.english }));
	}

	componentWillMount() {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		/* window.addEventListener('resize', () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}); */
	}

	render() {
		const { step, transition, answers, english } = this.state;

		return (
			<div className={`app app__section app__section--${categoryStep(step)}`}>
				<div className="container">
					<Header />

					<section className="app__content">
						{step === 0 && <Welcome {...{transition, english}} action={this.goToStep} language={this.changeLanguage} />}
						{step === 1 && <Instructions {...{transition, english}} action={this.goToStep} />}
						{step === 2 && <Questions {...{transition, english}} action={this.goToStep} />}
						{step === 3 && <Result {...{answers, transition, english}} action={this.goToStep} />}
						{step === 4 && <Questions {...{transition, english}} action={this.goToStep} showAnswers={true} />}
						{step === 5 && <Summary {...{english}} />}
					</section>
				</div>
			</div>
		);
	}
}

export default App;
