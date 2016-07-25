import React, { Component } from 'react';
import { Link } from 'react-router';
import jsCookie from 'js-cookie';

class RightNav extends Component {
	constructor() {
		super();
	}

	onLogout() {
		jsCookie.remove('username');
	}

	renderReturningUserNav() {
		return (
			<ul className="right-nav">
				<li>Welcome, {this.props.username}!</li>
				<li><Link to="/" onClick={this.onLogout}>Logout</Link></li>
			</ul>
		);
	}

	renderNewUserNav() {
		return (
			<ul className="right-nav">
				<li><Link to="/signup">Sign Up</Link></li>
				<li><Link to="/login">Login</Link></li>
			</ul>
		);
	}

	render() {
		return (this.props.username) ? this.renderReturningUserNav() : this.renderNewUserNav();
	}
};

export default RightNav;