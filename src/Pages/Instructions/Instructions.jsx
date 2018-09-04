import React, { Component } from 'react';
import Button from '../../Components/Button/Button';
import Steps from '../../Components/Step/Step';

import keyListener from '../../Utils/keyListener';

class Instructions extends Component {

	onKeyPress = keyListener.bind(this);

	componentDidMount() {
		window.addEventListener('keypress', this.onKeyPress, false);
	}

	componentWillUnmount() {
		window.removeEventListener('keypress', this.onKeyPress, false);
	}

	render() {
		const { action, transition, english } = this.props;

		return (
			<Steps
				name="instructions"
				title={english ? "Blue if it's correct, or red if it's not." : "Azul se a frase estiver correta, vermelha se estiver errada." }
				footer={<Button type="link" onClick={action}>{english ? 'Got It' : 'Entendi' }</Button>}
				{...{transition}}
			/>
		);
	}
};

export default Instructions;
