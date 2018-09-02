import React from 'react';
import Button from '../../Components/Button/Button';
import Steps from '../../Components/Step/Step';


const Instructions = ({ action, transition }) => (
	<Steps
		name="instructions"
		title="Blue is for if you think the sentence is right, red is for if there is something wrong."
		footer={<Button onClick={action}>Got It</Button>}
		{...{transition}}
	/>
);

export default Instructions;
