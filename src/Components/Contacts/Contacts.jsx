import React from 'react';
import Button from '../Button/Button';

const Contacts = () => (
	<div className="contacts">
		<Button
			type="link"
			href="https://www.linkedin.com/in/agnespinhanelli/"
			target="_blank"
			spaced
		>
			Design
		</Button>

		<Button
			type="link"
			href="https://www.linkedin.com/in/gfpaiva/"
			target="_blank"
		>
			Development
		</Button>
	</div>
);

export default Contacts;
