export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import * as APIUtil from '../util/session_api_util';

export const signup = (user) => dispatch => (
  APIUtil.signup(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
  err => {
    return dispatch(receiveErrors(err.responseJSON));
  })
);

export const login = (user) => dispatch => (
  APIUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => {
      return dispatch(receiveErrors(err.responseJSON));
    })
);

export const logout = (user) => dispatch => (
  APIUtil.logout(user)
    .then(currentUser => dispatch(receiveCurrentUser(null)))
);

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
