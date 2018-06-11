import React, { Component } from 'react';
import { func } from 'prop-types';

const validateForm = form => {
  const email = form.querySelector('[name=email]');
  const pwd = form.querySelector('[name=password]');
  const confirmed = form.querySelector('[name=confirm-password]');

  let err = '';
  if (!email.value.match(/@/)) {
    err = 'Please enter a valid email address.';
  } else if (pwd.value !== confirmed.value) {
    err = "Uh oh, your passwords don't match!";
  }

  return err;
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const error = validateForm(e.target);

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
          <label htmlFor="email">
            Email: <input type="text" name="email" required />
          </label>
          <label htmlFor="password">
            Password: <input type="password" name="password" required />
          </label>
          <label htmlFor="confirm-password">
            Confirm Password:{' '}
            <input type="password" name="confirm-password" required />
          </label>
          <button type="submit">Create Account</button>
        </form>
      </section>
    );
  }
}

SignUp.propTypes = {
  onSubmit: func.isRequired,
};

export default SignUp;
