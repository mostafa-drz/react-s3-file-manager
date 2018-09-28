import { GETTING_USER_FILES, GETTING_USER_FILES_ERROR, GETTING_USER_FILES_SUCCESS } from '../actions/types';

export default function Files(state = {}, action) {
  switch (action.type) {
    case GETTING_USER_FILES:
      return { ...state, isFetchingFiles: action.status }
    case GETTING_USER_FILES_SUCCESS:
      return { ...state, files: action.files }
    case GETTING_USER_FILES_ERROR:
      return { ...state, error: action.error }
    default:
      return state;
  }
}