import {combineReducers} from 'redux';
import UserReducer from './UserReducer';

export const userReducer = combineReducers({
  user: UserReducer,
});
