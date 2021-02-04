import { SIGN_UP, LOGIN, USER_EXIST, LOGOUT } from "./../action/authActions";
const initialState = {
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        token: action.token,
      };
    case LOGIN:
      return {
        token: action.token,
      };
    case USER_EXIST:
      return {
        token: action.payload
      }
    case LOGOUT:
      return initialState
    default:
      return state;
  }
};
