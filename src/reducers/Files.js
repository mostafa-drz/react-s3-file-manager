import { GETTING_USER_FILES, GETTING_USER_FILES_ERROR, GETTING_USER_FILES_SUCCESS, UPDATING_FILE_DETAIL_SUCCESS, UPLOADING_FILE_SUCCESS } from '../actions/types';

export default function Files(state = {}, action) {
  switch (action.type) {
    case GETTING_USER_FILES:
      return { ...state, isFetchingFiles: action.status }
    case GETTING_USER_FILES_SUCCESS:
      return { ...state, files: action.files.reduce((accu, file) => ({ ...accu, [file.fileId]: file }), {}) }
    case GETTING_USER_FILES_ERROR:
      return { ...state, error: action.error }
    case UPDATING_FILE_DETAIL_SUCCESS:
      return { ...state, files: { ...state.files, [action.updated.fileId]: action.updated } }
    case UPLOADING_FILE_SUCCESS:
      return { ...state, files: { ...state.files, [action.uploaded.fileId]: action.uploaded } }
    default:
      return state;
  }
}