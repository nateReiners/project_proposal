import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Slogan from './slogan/slogan';
const App = ({ children }) => (
  <div>
    <div className="main-nav">
      <div className="logo"></div>
      <GreetingContainer />
    </div>
    <div className="slogan-div">
      <h1>Where photographers connect</h1>
      <h2>Share your work, and stay inspired.</h2>
    </div>
    { children }
  </div>
);

export default App;
