import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PhotosReducer from './photos_reducer';
import FollowsReducer from './follows_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotosReducer,
  follows: FollowsReducer
});

export default rootReducer;
