import React from 'react';

import './Header.scss';
import open from './eye-open.svg';
import closed from './eye-closed.svg';

const Header = () => (
	<header className="header">
		<div className="header__logo">
			<img className="header__image header__image--open" src={open} alt="Good Eye" title="Good Eye" />
			<img className="header__image header__image--closed" src={closed} alt="Good Eye" title="Good Eye" />
		</div>
	</header>
);

export default Header;
