import {
  SIGNING_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGNING_IN,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  GETING_CURRENT_SESSION,
  GETING_CURRENT_SESSION_SUCCESS,
  GETING_CURRENT_SESSION_ERROR,
  LOGOUT_USER,
  IS_USER_AUTHENTICATED
} from '../actions/types';
import {
  logoutUser
} from '../actions/User';
export default function Auth(state = {
  signingUp: false,
  signingUpError: null,
  signingUpSuccess: false,
  signingIn: false,
  signingInError: null,
  signingInSuccess: false
}, action) {
  switch (action.type) {
    case SIGNING_UP:
      return {
        ...state,
        signingUp: action.status
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signingUpSuccess: true
      }
    case SIGN_UP_ERROR:
      return {
        ...state,
        signingUpError: action.error
      }
    case SIGNING_IN:
      return {
        ...state,
        signingIn: action.status
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signingInSuccess: true,
      }
    case SIGN_IN_ERROR:
      return {
        ...state,
        signingInError: action.error
      }
    case GETING_CURRENT_SESSION:
      return {
        ...state,
        getingSession: action.status
      }
    case GETING_CURRENT_SESSION_SUCCESS:
      return {
        ...state,
        session: action.session
      }
    case IS_USER_AUTHENTICATED:
      return {
        ...state,
        isAuthorized: action.isUserAuthenticated
      }
    case GETING_CURRENT_SESSION_ERROR:
      return {
        state,
        session: null
      }
    case LOGOUT_USER:
      return {
        ...state,
        sesssion: null,
      }
    default:
      return state;
  }
}