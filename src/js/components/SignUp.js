import React, { Component } from 'react';
import { withRouter } from 'react-router';
import forms from '../utils/forms';

class SignUp extends Component {

	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.handleResponse = this.handleResponse.bind(this);
	}

	handleResponse(xhr) {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				// redirect to Home
				this.props.router.push('/');
			} else {
				let message = JSON.parse(xhr.responseText).message;
				alert(message);
			}
		}
	}

	validate(form) {
		const email = form.querySelector('[name=email]');
		const pwd = form.querySelector('[name=password]');
		const confirmed = form.querySelector('[name=confirm-password]');

		let err = '';
		if (pwd.value !== confirmed.value) {
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
			console.log('submitting...');
			forms.submit(e.target, this.handleResponse);
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

export default withRouter(SignUp);