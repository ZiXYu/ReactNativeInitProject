import { combineReducers } from 'redux';
import * as types from '../constants/actionTypes';

const initialState = {
  isLogin: false,
};

function login(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_LOGIN_STATE:
      return Object.assign({}, state, {
        isLogin: action.isLogin,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  login
});

export default rootReducer;
