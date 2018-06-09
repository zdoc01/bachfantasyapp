import React from 'react';
import { Link } from 'react-router';

export default () => (
  <section>
    <h1>Games</h1>
    <ul>
      <li><Link to="/games/bachfantasy">bachfantasy</Link></li>
      <li><Link to="/games/survivor">Survivor</Link></li>
    </ul>
  </section>
);
