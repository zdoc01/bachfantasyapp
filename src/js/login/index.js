import React, { Component } from 'react';
import { withRouter } from 'react-router';
import forms from '../common/utils/forms';

class Login extends Component {

	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.handleResponse = this.handleResponse.bind(this);
	}

	handleResponse(xhr) {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				// redirect to dashboard
				this.props.router.push('/dashboard');
			} else {
				let message = JSON.parse(xhr.responseText).message;
				alert(message);
			}
		}
	}

	onSubmit(e) {
		e.preventDefault();
		console.log('submitting...');

		forms.submit(e.target, this.handleResponse);
	}

	render() {
		return (
			<section>
				<h1>Login</h1>
	      <form method="POST" action="/api/login" onSubmit={this.onSubmit}>
	      	<label>Email: <input type="text" name="email" required /></label>
	      	<label>Password: <input type="password" name="password" required /></label>
	      	<button type="submit">Login</button>
	      </form>
	    </section>
		);
	}
}

export default withRouter(Login);