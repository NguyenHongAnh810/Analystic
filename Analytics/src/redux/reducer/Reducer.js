import {TYPES} from './../actions/Action';
import {Alert} from 'react-native';

export const initalState = {
  user: {
    isLogin: false,
  },
  loading: false,
};

function myReducer(state = initalState, action) {
  switch (action.type) {
    case TYPES.LOGIN_SUCCESS:
      state.user.isLogin = true;
      return {...state};
    case TYPES.LOGOUT_SUCCESS:
      state.user.isLogin = false;
      return {...state};
    default:
      return {...state};
  }
}

export default myReducer;
