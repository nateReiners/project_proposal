import { merge } from 'lodash';

import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_NEW_PHOTOS
} from '../actions/photos_actions';

const photos = {
  1: {
    user_id: 1,
    img_url: "http://www.dumpaday.com/wp-content/uploads/2016/03/funny-332.jpg"
  },
  2: {
    user_id: 2,
    img_url: "https://s-media-cache-ak0.pinimg.com/236x/75/a9/3b/75a93b93a36c273d29f06fc49210da94.jpg"
  }
};

const PhotosReducer = (state = photos, action) => {
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
