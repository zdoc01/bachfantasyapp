import React from 'react';
import { Link } from 'react-router';

export default props => {
	return (
		<ul>
			<li><Link to="/rules/bachfantasy">bachfantasy</Link></li>
			<li><Link to="/rules/survivor">Survivor</Link></li>
		</ul>
	);
};