import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PhotosReducer from './photos_reducer';
import UserReducer from './user_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotosReducer,
  user: UserReducer
});

export default rootReducer;
