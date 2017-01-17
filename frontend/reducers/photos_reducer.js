import { merge } from 'lodash';

import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_NEW_PHOTOS,
  RECEIVE_NEW_PHOTO
} from '../actions/photos_actions';


const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_NEW_PHOTOS:
      return merge({}, state, {
        [action.photos.id]: action.photos
      });
    default:
      return state;
  }
};

export default PhotosReducer;
