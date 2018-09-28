import { API } from 'aws-amplify';
import { GETTING_USER_FILES, GETTING_USER_FILES_ERROR, GETTING_USER_FILES_SUCCESS } from './types';
export const getAllUserFiles = () => {
  return dispatch => {
    dispatch({ type: GETTING_USER_FILES, status: true });
    API.get('files', '/files').then((files) => {
      console.log(files);
      dispatch({ type: GETTING_USER_FILES, status: false });
      dispatch({ type: GETTING_USER_FILES_SUCCESS, files });
    }).catch((error) => {
      dispatch({ type: GETTING_USER_FILES, status: false });
      dispatch({ type: GETTING_USER_FILES_ERROR, error: error.message });
    })
  }
}