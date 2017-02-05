import React from 'react';
import DemoButtonContainer from '../demo/demo_button_container';
import LoggedOutNav from '../main_nav/logged-out_nav.jsx';
import SessionFormContainer from '../session_form/session_form_container';

const Splash = () => {
  let classname;


  let i = 1;
  document.body.id = `background-${i}`
  function changeclass() {
      document.body.id = `background-${i}`;
      i++;
      if(i === 6) { i = 1; }
  }

  return (
    <div className="splash-div">
      <div id={changeclass()} className="background-imgs">
      </div>
      <LoggedOutNav />
      <div className="splash-welcome">
        <h1>Where photographers connect</h1>
        <h2>Share your work, and stay inspired.</h2>
        <DemoButtonContainer />
      </div>
      <button className="change-background-btn" onClick={() => changeclass()}>
        Change Background
      </button>
    </div>
  );
};

export default Splash;
