import React from 'react';
import Header from './header';
import Routes from './routes';

const App = () => (
  <div>
    <Header />
    <div className="container">
      <Routes />
    </div>
  </div>
);

export default App;
