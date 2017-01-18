import { merge } from 'lodash';

import {
  RECEIVE_ALL_USERS,
  RECEIVE_NEW_USERS,
  RECEIVE_SINGLE_USER,
} from '../actions/users_actions';
import {   RECEIVE_NEW_PHOTO } from '../actions/photos_actions';
import { RECEIVE_NEW_FOLLOW } from '../actions/follows_actions';

// add receive new photo

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, action.users);
    case RECEIVE_NEW_USERS:
      return merge({}, state, {
        [action.users.id]: action.users
      });
    case RECEIVE_SINGLE_USER:
      return action.user;
    case RECEIVE_NEW_PHOTO:
      const newState = merge({}, state);
      newState.photos.unshift(action.photo);
      return newState;
    case RECEIVE_NEW_FOLLOW:
      const newbState = merge({}, state);
      debugger
      merge(newbState.follows, action.follow);
      return newbState;
    default:
      return state;
  }
};

export default UserReducer;
