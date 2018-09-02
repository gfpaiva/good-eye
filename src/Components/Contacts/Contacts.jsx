import React from 'react';
import Button from '../Button/Button';

const Contacts = () => (
	<div className="contacts">
		<Button
			type="link"
			href="https://www.linkedin.com/in/agnespinhanelli/"
			target="_blank"
		>
			Design
		</Button>

		<Button
			type="link"
			href="https://www.linkedin.com/in/gfpaiva/"
			target="_blank"
			spaced
		>
			Development
		</Button>
	</div>
);

export default Contacts;
