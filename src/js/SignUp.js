import React from 'react';

export default () => {
	return (
		<section>
			<h1>Create Your Account</h1>
      <form action="/api/signup" method="POST">
      	<label>Username: <input type="text" required /></label>
      	<label>Password: <input type="password" required /></label>
      </form>
    </section>
	);
};