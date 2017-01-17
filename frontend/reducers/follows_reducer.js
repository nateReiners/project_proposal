import { merge } from 'lodash';

import {
  RECEIVE_ALL_FOLLOWS,
  RECEIVE_NEW_FOLLOWS
} from '../actions/follows_actions';


const FollowsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_FOLLOWS:
      return merge({}, action.follows);
    case RECEIVE_NEW_FOLLOWS:
      return merge({}, state, {
        [action.follows.id]: action.follows
      });
    default:
      return state;
  }
};

export default FollowsReducer;
