import React, { Component, Fragment } from 'react';
import Button from '../../Components/Button/Button';
import Steps from '../../Components/Step/Step';

import keyListener from '../../Utils/keyListener';

class Welcome extends Component {

	onKeyPress = keyListener.bind(this);

	componentDidMount() {
		window.addEventListener('keypress', this.onKeyPress, false);
	}

	componentWillUnmount() {
		window.removeEventListener('keypress', this.onKeyPress, false);
	}

	render() {
		const { action, transition, english, language } = this.props;

		return (
			<Steps
				name="welcome"
				title={english ? "Do you have an eye for detail?" : 'Você consegue se atentar aos detalhes?' }
				footer={
					<Fragment>
						<Button type="link" onClick={action}>{english ? 'Start' : 'Começar' }</Button>
						<Button type="link" onClick={language}>{english ? 'PT' : 'EN'}</Button>
					</Fragment>
				}
				{...{transition}}
			/>
		);
	}
};

export default Welcome;
