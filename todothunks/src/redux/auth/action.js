import { authConstants } from "./actionType";

export const loginSuccess = (token) => {
  return {
    type: authConstants.LOGIN_SUCCESS,
    payload: {
      token: token
    }
  };
};
