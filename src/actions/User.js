import { SIGNING_UP, SIGN_UP_SUCCESS, SIGN_UP_ERROR, SIGN_IN_ERROR, SIGN_IN_SUCCESS, SIGNING_IN, GETING_CURRENT_SESSION, GETING_CURRENT_SESSION_SUCCESS, GETING_CURRENT_SESSION_ERROR } from './types';
import {
  Auth
} from 'aws-amplify';
export const signUpUserOnCognito = ({
  email,
  password
}) => {
  return dispatch => {
    dispatch({ type: SIGNING_UP, status: true });
    Auth.signUp({ username: email, password }).then(() => {
      dispatch({ type: SIGNING_UP, status: false });
      dispatch({ type: SIGN_UP_SUCCESS });
    }).catch((error) => {
      console.log(error);
      dispatch({ type: SIGNING_UP, status: false });
      dispatch({ type: SIGN_UP_ERROR, error: error.message });
    })
  }
}

export const signInUserOnCognito = ({
  email,
  password
}) => {
  return dispatch => {
    dispatch({ type: SIGNING_IN, status: true });
    Auth.signIn(email, password).then((resp) => {
      console.log(resp);
      dispatch({ type: SIGNING_IN, status: false });
      dispatch({ type: SIGN_IN_SUCCESS });
    }).catch((error) => {
      console.log(error);
      dispatch({ type: SIGNING_IN, status: false });
      dispatch({ type: SIGN_IN_ERROR, error: error.message });
    })
  }
}

export const isUserAuthenticated = () => {
  return dispatch => {
    dispatch({ type: GETING_CURRENT_SESSION, status: true });
    Auth.currentSession().then((session) => {
      dispatch({ type: GETING_CURRENT_SESSION, status: false });
      dispatch({ type: GETING_CURRENT_SESSION_SUCCESS, session });
    }).catch((error) => {
      console.log(error);
      dispatch({ type: GETING_CURRENT_SESSION, status: false });
      dispatch({ type: GETING_CURRENT_SESSION_ERROR, error: error.message });
    })
  }
}