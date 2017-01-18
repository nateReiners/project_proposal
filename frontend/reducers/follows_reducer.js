import { merge } from 'lodash';

import {
  RECEIVE_ALL_FOLLOWS,
  RECEIVE_NEW_FOLLOW,
  DESTROY_FOLLOW
} from '../actions/follows_actions';


const FollowsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_FOLLOW:
      return action.follow;
    default:
      return state;
  }
};

export default FollowsReducer;
