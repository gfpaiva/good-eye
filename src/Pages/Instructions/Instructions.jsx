import React from 'react';
import Button from '../../Components/Button/Button';
import Steps from '../../Components/Step/Step';


const Instructions = ({ action, transition }) => (
	<Steps
		name="instructions"
		title="Blue if the sentence is right, red if there is something wrong."
		footer={<Button type="link" onClick={action}>Got It</Button>}
		{...{transition}}
	/>
);

export default Instructions;
