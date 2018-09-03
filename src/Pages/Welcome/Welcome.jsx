import React from 'react';
import Button from '../../Components/Button/Button';
import Steps from '../../Components/Step/Step';

const Welcome = ({ action, transition }) => (
	<Steps
		name="welcome"
		title="Do you have an eye for detail?"
		footer={<Button type="link" onClick={action}>Start</Button>}
		{...{transition}}
	/>
);

export default Welcome;
