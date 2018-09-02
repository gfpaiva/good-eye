import React from 'react';

import './SingleSummary.scss';
import Button from '../Button/Button';

const SingleSummary = ({name, description, link}) => (
	<article className="summary__woman">
		<p className="summary__name">{name}</p>
		<p className="summary__desc">{description}</p>
		<Button
			type="link"
			href={link}
			className="summary__link"
			title={name}
			target="_blank"
		>
			Read more about her
		</Button>
	</article>
);

export default SingleSummary;
