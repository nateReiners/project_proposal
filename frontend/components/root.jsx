import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Splash from './splash/splash';
import SessionFormContainer from './session_form/session_form_container';
import App from './app';
import Home from './home/home';
import Profile from './profile/profile';
import PhotoDetailContainer from './photos/photo_detail_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
   const currentUser = store.getState().session.currentUser;
   if (!currentUser) {
     replace('/login');
   }
 };

 const _redirectIfLoggedIn = (nextState, replace) => {
   const currentUser = store.getState().session.currentUser;
   if (currentUser) {
     replace('/home');
   }
 };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Splash } onEnter={_redirectIfLoggedIn}/>
          <Route path="login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route path="signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route path="home" component={Home} onEnter={_ensureLoggedIn}/>
          <Route path="profile" component={Profile} onEnter={_ensureLoggedIn}/>
          <Route path="photos/:id" component={PhotoDetailContainer} onEnter={_ensureLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
