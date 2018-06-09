import React, { PropTypes } from 'react';
import Header from './header';

const { arrayOf, node } = PropTypes;

const App = props => (
  <div>
    <Header />
    <div className="container">
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: arrayOf(node).isRequired,
};

export default App;
