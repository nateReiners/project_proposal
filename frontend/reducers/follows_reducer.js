import { merge } from 'lodash';

import {
  RECEIVE_ALL_FOLLOWS,
  RECEIVE_NEW_FOLLOWS
} from '../actions/follows_actions';


const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_FOLLOWS:
      return merge({}, action.photos);
    case RECEIVE_NEW_FOLLOWS:
      return merge({}, state, {
        [action.photos.id]: action.photos
      });
    default:
      return state;
  }
};

export default PhotosReducer;
