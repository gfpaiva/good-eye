import React, { Fragment } from 'react';
import Button from '../../Components/Button/Button';
import Contacts from '../../Components/Contacts/Contacts';
import Steps from '../../Components/Step/Step';


const Welcome = ({ action, transition }) => (
	<Steps
		name="welcome"
		title="You can pass the test if you have a good eye."
		footer={
			<Fragment>
				<Button onClick={action}>Start</Button>
				<Contacts />
			</Fragment>
		}
		{...{transition}}
	/>
);

export default Welcome;
