import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import * as APIUtil from './util/photos_api_util';
import * as apiUTIL from './util/follows_api_util';
import * as APIutil from './util/users_api_util';

document.addEventListener("DOMContentLoaded", () => {
  window.fetchAllPhotos = APIUtil.fetchAllPhotos;
  window.createPhoto = APIUtil.createPhoto;
  window.createFollow = apiUTIL.createFollow;
  window.fetchAllFollows = apiUTIL.fetchAllFollows;
  window.destroyFollow = apiUTIL.desroyFollow;
  window.createUser = APIutil.createuser;
  window.fetchAllUsers = APIutil.fetchAllUsers;
  window.fetchSingleUser = APIutil.fetchSingleUser;

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
