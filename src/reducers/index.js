import User from './User';
import Auth from './Auth';
import Files from './Files';
import {
  combineReducers
} from 'redux';

export default combineReducers({
  User,
  Auth,
  Files
});