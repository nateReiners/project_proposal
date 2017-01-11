import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <div className="main-nav">
      <div className="logo"></div>
      <GreetingContainer />
    </div>
    { children }
  </div>
);

export default App;
