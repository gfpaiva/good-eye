import React from 'react';

import './Step.scss';

const Step = ({name, title, footer, transition}) => (
	<article className={`step__container ${name}${transition ? ' step__transition' : ''}`}>
		<p className={`step__title ${name}__title`} dangerouslySetInnerHTML={{__html: title}}></p>
		<div className={`step__footer ${name}__footer`}>{footer}</div>
	</article>
);

export default Step;
