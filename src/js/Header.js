import React from 'react';
import { Link } from 'react-router';

export default props => {
	return (
		<header className="app-header">
			<nav className="nav-bar clearfix">
				<ul className="left-nav">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/rules">Rules</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
				<ul className="right-nav">
					<li><Link to="/signup">Sign Up</Link></li>
				</ul>
			</nav>
		</header>
	);
};