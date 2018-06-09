import React, { PropTypes } from 'react';

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
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
