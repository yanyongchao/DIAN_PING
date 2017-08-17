// 这里是合并所以reducer
import {combineReducers} from 'redux';
import {userInfo} from './userInfo';
export default combineReducers({
  userInfo
});