import React from 'react';
import { func } from 'prop-types';

const Login = props => {
  const { onSubmit } = props;

  return (
    <section>
      <h1>Login</h1>
      <form method="POST" action="/api/login" onSubmit={onSubmit}>
        <label htmlFor="email">
          Email: <input type="text" name="email" required />
        </label>
        <label htmlFor="password">
          Password: <input type="password" name="password" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

Login.propTypes = {
  onSubmit: func.isRequired,
};

export default Login;
