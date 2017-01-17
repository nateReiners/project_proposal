import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PhotosReducer from './photos_reducer';
import FollowsReducer from './follows_reducer';
import UsersReducer from './users_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotosReducer,
  follows: FollowsReducer,
  user: UsersReducer
});

export default rootReducer;
