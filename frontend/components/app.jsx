import React from 'react';
import DemoButtonContainer from './demo/demo_button_container';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div className="app-div">
    { children }
  </div>
);

export default App;
