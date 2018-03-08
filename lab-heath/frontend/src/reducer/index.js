
import {combineReducers} from 'redux';
import token from './auth';
import picture from './picture';
import profile from './profile';

export default combineReducers({
  token,picture,profile,
});