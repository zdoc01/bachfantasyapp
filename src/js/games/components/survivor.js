/* eslint-disable max-len */

import React from 'react';

export default () => (
  <section>
    <h1>Survivor</h1>
    <p>A fantasy game for the hit CBS show Survivor.</p>
    <p>
      Visit the{' '}
      <a
        href="http://www.cbs.com/shows/survivor/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ABC website
      </a>{' '}
      for more information.
    </p>

    <article>
      <h2>Rules</h2>
      <article>
        <h3>Confessionals and Questions</h3>
        <dl>
          <dt>Player confessionals</dt>
          <dd>
            +1 per confessional (10 seconds between confessionals is a new
            confessional for scoring purposes)
          </dd>
          <dt>Player voting confessional</dt>
          <dd>
            +2 if Player has a confessional while casting their vote at Tribal
            Council
          </dd>
          <dt>Player says the title of the episode</dt>
          <dd>+3</dd>
          <dt>Jeff Probst questions</dt>
          <dd>
            +1 per question directed to the Player by Jeff at Tribal Council or
            a Challenge
          </dd>
        </dl>
      </article>

      <article>
        <h3>Immunity and Idols</h3>
        <dl>
          <dt>Player wins immunity</dt>
          <dd>
            +4 tribal, +7 individual, +10 for winning Final Immunity Challenge
          </dd>
          <dt>
            Player&apos;s Tribe gets second place in immunity challenge
            (three-tribe format only)
          </dt>
          <dd>+3</dd>
          <dt>Player finds or plays a hidden immunity idol</dt>
          <dd>+5</dd>
          <dt>
            Player has possession of a hidden immunity idol at the start of an
            episode
          </dt>
          <dd>+1</dd>
          <dt>
            Player is awarded, finds, or plays extra vote advantage (if
            implemented this season)
          </dt>
          <dd>+5</dd>
          <dt>
            Player receives Legacy Advantage (either when found or when willed
            by the exiting Player who previously held the Advantage)
          </dt>
          <dd>+5</dd>
          <dt>Player is saved from elimination by hidden immunity idol</dt>
          <dd>+10</dd>
          <dt>
            Player is saved from elimination by extra vote advantage (if
            implemented this season)
          </dt>
          <dd>+10</dd>
        </dl>
      </article>

      <article>
        <h3>Rewards</h3>
        <dl>
          <dt>Player wins reward</dt>
          <dd>+3 tribal, +5 individual, +2 if picked</dd>
        </dl>
      </article>

      <article>
        <h3>Surviving Tribal Council</h3>
        <dl>
          <dt>Player survives Tribal Council</dt>
          <dd>+2 for all who attend Tribal and are not voted out</dd>
          <dt>Third place</dt>
          <dd>+10</dd>
          <dt>Runner-up</dt>
          <dd>+14</dd>
          <dt>Sole Survivor</dt>
          <dd>+20</dd>
          <dt>Fan Favorite</dt>
          <dd>+10</dd>
          <dt>Player quits</dt>
          <dd>-5</dd>
        </dl>
      </article>
    </article>
  </section>
);
