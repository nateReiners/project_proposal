import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Splash from './splash/splash';
import SessionFormContainer from './session_form/session_form_container';
import App from './app';
import HomeContainer from './home/home_container';
import ProfileContainer from './profile/profile_container';
import PhotoDetailContainer from './photos/photo_detail_container';
import SimpleSliderContainer from './photos/slick_container';

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
          <Route path="home" component={ HomeContainer } onEnter={_ensureLoggedIn}/>
          <Route path="users/:id" component={ProfileContainer} onEnter={_ensureLoggedIn}/>
          <Route path="profile" component={ProfileContainer} onEnter={_ensureLoggedIn}/>
          <Route path="photos/:id" component={PhotoDetailContainer} onEnter={_ensureLoggedIn}/>
          <Route path="slick" component={ SimpleSliderContainer } />
      </Route>
      </Router>
    </Provider>
  );
};

export default Root;
