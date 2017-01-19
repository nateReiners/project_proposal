import { merge } from 'lodash';

import {
  RECEIVE_ALL_USERS,
  RECEIVE_NEW_USERS,
  RECEIVE_SINGLE_USER,
} from '../actions/users_actions';
import {   RECEIVE_NEW_PHOTO } from '../actions/photos_actions';
import { RECEIVE_NEW_FOLLOW, REMOVE_FOLLOW } from '../actions/follows_actions';

// add receive new photo

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

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
      newState.photos.unshift(action.photo);
      return newState;
    case RECEIVE_NEW_FOLLOW:
      newState.followed = true;
      return newState;
    case REMOVE_FOLLOW:
      newState.followed = false;
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
