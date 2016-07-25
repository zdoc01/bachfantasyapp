import React from 'react';
import { Link } from 'react-router';
import jsCookie from 'js-cookie';

export default props => {
	const username = jsCookie.get('username');

	let rightNav;
	if (username) {
		rightNav = (<span className="right-nav welcome">Welcome, {username.split('@')[0]}!</span>);
	} else {
		rightNav = (
			<ul className="right-nav">
				<li><Link to="/signup">Sign Up</Link></li>
				<li><Link to="/login">Login</Link></li>
			</ul>
		);
	}

	return (
		<header className="app-header">
			<nav className="nav-bar clearfix container">
				<ul className="left-nav">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/rules">Rules</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
				{rightNav}
			</nav>
		</header>
	);
};