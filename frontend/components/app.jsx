import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Splash from './splash/splash';
import DemoButtonContainer from './demo/demo_button_container';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <div className="main-nav">
      <Link to="/">
        <div className="logo"></div>
      </Link>
      <GreetingContainer />
    </div>
    <Splash />
    { children }
  </div>
);

export default App;
