import { merge } from 'lodash';

import {
  RECEIVE_ALL_USERS,
  RECEIVE_NEW_USERS
} from '../actions/users_actions';


const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, action.users);
    case RECEIVE_NEW_USERS:
      return merge({}, state, {
        [action.users.id]: action.users
      });
    default:
      return state;
  }
};

export default UsersReducer;
