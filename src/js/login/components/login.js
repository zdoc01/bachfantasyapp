import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';

class Login extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { onSubmit } = this.props;

		return (
			<section>
				<h1>Login</h1>
	      <form method="POST" action="/api/login" onSubmit={onSubmit}>
	      	<label>Email: <input type="text" name="email" required /></label>
	      	<label>Password: <input type="password" name="password" required /></label>
	      	<button type="submit">Login</button>
	      </form>
	    </section>
		);
	}
}

Login.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default withRouter(Login);