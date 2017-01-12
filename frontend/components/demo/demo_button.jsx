import React from 'react';
import { Link, withRouter } from 'react-router';


const DemoButton = (props) => {
  console.log("demobutton");
  return (
    <button className="demo-button" onClick={props.login}>Demo as Guest</button>
  );
};


export default DemoButton
