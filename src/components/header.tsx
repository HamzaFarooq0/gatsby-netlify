import React from 'react';
import { Link } from 'gatsby';
import style from './header.module.css';

const Header: React.FC = () => {
	return (
		<div className={style.container}>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/product">Product</Link>
		</div>
	);
};

export default Header;
