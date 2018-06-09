import React from 'react';

const ABC_BACH_LINK = 'http://abc.go.com/shows/the-bachelor';
const BACH_FAN_LINK = 'https://bachfantasy.com/the-points-system/';

export default () => (
  <section>
    <h1>bachfantasy</h1>
    <p>A fantasy game for the hit ABC show The Bachelor/Bachelorette.</p>
    <p>Visit the <a href={ABC_BACH_LINK} target="_blank" rel="noopener noreferrer">ABC website</a> for more information.</p>

    <article>
      <h2>Rules</h2>
      <p>The scoring for each week follows the official <a href={BACH_FAN_LINK} target="_blank" rel="noopener noreferrer">Bach Fantasy Points System</a>.</p>
    </article>
  </section>
);
