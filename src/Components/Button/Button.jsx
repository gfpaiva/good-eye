import React from 'react';

import './Button.scss';

const Button = ({children, className, type, spaced, ...rest}) => {
	if(type === 'link') {
		return (
			<a
				className={`btn btn-link${spaced ? ' btn--spaced' : ''}${className ? ` ${className}` : ''}`}
				{...rest}
			>
				{children}
			</a>
		);
	}

	return (
		<button
			className={`btn btn-button${spaced ? ' btn--spaced' : ''}${className ? ` ${className}` : ''}`}
			type={type}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
