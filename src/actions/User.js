import { SIGNING_UP, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from './types';
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