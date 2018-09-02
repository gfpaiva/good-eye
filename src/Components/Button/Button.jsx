import React from 'react';

import './Button.scss';

const Button = ({children, className, type, spaced, ...rest}) => {
	if(type === 'link') {
		return (
			<a
				className={`btn${spaced ? ' btn--spaced' : ''}${className ? ` ${className}` : ''}`}
				{...rest}
			>
				{children}
			</a>
		);
	}

	return (
		<button
			className={`btn${className ? ` ${className}` : ''}`}
			type={type}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
