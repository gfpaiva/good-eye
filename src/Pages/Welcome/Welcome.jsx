import React, { Component } from 'react';
import Button from '../../Components/Button/Button';
import Steps from '../../Components/Step/Step';

import keyListener from '../../Utils/keyListener';

class Welcome extends Component {

	onKeyPress =  keyListener.bind(this);

	componentDidMount() {
		window.addEventListener('keypress', this.onKeyPress, false);
	}

	componentWillUnmount() {
		window.removeEventListener('keypress', this.onKeyPress, false);
	}

	render() {
		const { action, transition } = this.props;

		return (
			<Steps
				name="welcome"
				title="Do you have an eye for detail?"
				footer={<Button type="link" onClick={action}>Start</Button>}
				{...{transition}}
			/>
		);
	}
};

export default Welcome;
