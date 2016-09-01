export const SessionConstants = {
  LOGIN: "LOGIN",
  LOGOUT:"LOGOUT",
  SIGNUP:"SIGNUP",
  RECEIVE_CURRENT_USER:"RECEIVE_CURRENT_USER",
  RECEIVE_ERRORS:"RECEIVE_ERRORS"
};

export const login = data => ({
  type: SessionConstants.LOGIN,
  data
});

export const logout = () => ({
  type: SessionConstants.LOGOUT
});

export const signup = data => ({
  type: SessionConstants.SIGNUP,
  data
});

export const receiveCurrentUser = data => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  data
});

export const receiveErrors = data => ({
  type: SessionConstants.RECEIVE_ERRORS,
  data
});
