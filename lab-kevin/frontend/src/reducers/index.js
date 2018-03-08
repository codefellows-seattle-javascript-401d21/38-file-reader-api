import {combineReducers} from 'redux';
import signReducer from './sign-reducer';
import profileReducer from './profile-reducer';

export default combineReducers(
  {
    token: signReducer,
    profile: profileReducer,
  }
);