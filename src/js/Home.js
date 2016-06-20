import React from 'react';
import { Link } from 'react-router';

export default () => {
	return (
		<section>
			<h1>Welcome to <span className="red">BachFantasy</span>!</h1>
      <p>Learn more at <a href="http://bachfantasy.com" target="_blank">www.bachfantasy.com</a>.</p>
      <Link to="/signup" className="button">Sign Up</Link>
    </section>
	);
};