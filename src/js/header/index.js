import React from 'react';
import { Link } from 'react-router';
import jsCookie from 'js-cookie';
import RightNav from './components/RightNav';

export default props => {
	const username = jsCookie.get('username');
	
	return (
		<header className="app-header">
			<nav className="nav-bar clearfix container">
				<ul className="left-nav">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/rules">Rules</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
				<RightNav username={username} />
			</nav>
		</header>
	);
};