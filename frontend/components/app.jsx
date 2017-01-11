import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <div className="main-nav">
      <h1>TogLink</h1>
      <GreetingContainer />
    </div>
    { children }
  </div>
);

export default App;
