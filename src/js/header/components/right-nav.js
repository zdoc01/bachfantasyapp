import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class RightNav extends Component {
	constructor() {
		super();
	}

	renderReturningUserNav() {
		return (
			<ul className="right-nav">
				<li>Welcome, {this.props.username}!</li>
				<li><Link to="/" onClick={this.props.onLogout}>Logout</Link></li>
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
		return (this.props.username) ?
							this.renderReturningUserNav() : this.renderNewUserNav();
	}
};

RightNav.propTypes = {
	username: PropTypes.string,
	onLogout: PropTypes.func
};

export default RightNav;