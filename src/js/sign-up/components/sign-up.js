import React, { Component, PropTypes } from 'react';

class SignUp extends Component {

	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	validate(form) {
		const email = form.querySelector('[name=email]');
		const pwd = form.querySelector('[name=password]');
		const confirmed = form.querySelector('[name=confirm-password]');

		let err = '';
		if (!email.value.match(/@/)) {
			err = 'Please enter a valid email address.';
		} else if (pwd.value !== confirmed.value) {
			err = 'Uh oh, your passwords don\'t match!';
		}

		return err;
	}

	onSubmit(e) {
		e.preventDefault();
		const error = this.validate(e.target);

		if (error) {
			alert(error);
		} else {
			this.props.onSubmit(e);
		}
	}

	render() {
		return (
			<section>
				<h1>Create Your Account</h1>
	      <form method="POST" action="/api/signup" onSubmit={this.onSubmit}>
	      	<label>Email: <input type="text" name="email" required /></label>
	      	<label>Password: <input type="password" name="password" required /></label>
	      	<label>Confirm Password: <input type="password" name="confirm-password" required /></label>
	      	<button type="submit">Create Account</button>
	      </form>
	    </section>
		);
	}
}

SignUp.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default SignUp;