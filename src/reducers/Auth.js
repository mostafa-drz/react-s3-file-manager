import {
  SIGNING_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR
} from '../actions/types';
export default function Auth(state = {
  signingUp: false,
  signingUpError: null,
  signingUpSuccess: false
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
    default:
      return state;
  }
}