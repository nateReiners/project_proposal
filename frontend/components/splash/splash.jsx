import React from 'react';
import DemoButtonContainer from '../demo/demo_button_container';
import LoggedOutNav from '../main_nav/logged-out_nav.jsx';
import SessionFormContainer from '../session_form/session_form_container';

const Splash = () => {
  return (
    <div className="splash-div">
      <LoggedOutNav />
      <div className="splash-welcome">
        <h1>Where photographers connect</h1>
        <h2>Share your work, and stay inspired.</h2>
        <DemoButtonContainer />
      </div>
    </div>
  );
};

export default Splash;
