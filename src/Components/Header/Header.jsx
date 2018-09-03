import React from 'react';

import './Header.scss';
import open from './eye-open.svg';
import closed from './eye-closed.svg';

const Header = () => (
	<header className="header">
		<div className="header__logo">
			<a href="/" title="an eye for detail">
				<img className="header__image header__image--open" src={open} alt="an eye for detail" />
				<img className="header__image header__image--closed" src={closed} alt="an eye for detail" />
			</a>
		</div>
	</header>
);

export default Header;
