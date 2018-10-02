import { API } from 'aws-amplify';
import { GETTING_USER_FILES, GETTING_USER_FILES_ERROR, GETTING_USER_FILES_SUCCESS, UPDATING_FILE_DETAIL_SUCCESS, UPLOADING_FILE_SUCCESS, DELETING_FILE_SUCCESS } from './types';
import { uploadToS3, submitNewFileDetails, deleteFileFromS3, deleteFileDetails } from '../utils/AWS';
export const getAllUserFiles = () => {
  return dispatch => {
    dispatch({ type: GETTING_USER_FILES, status: true });
    API.get('files', '/files').then((files) => {
      dispatch({ type: GETTING_USER_FILES, status: false });
      dispatch({ type: GETTING_USER_FILES_SUCCESS, files });
    }).catch((error) => {
      dispatch({ type: GETTING_USER_FILES, status: false });
      dispatch({ type: GETTING_USER_FILES_ERROR, error: error.message });
    })
  }
}

export const updateFileDeatil = ({ fileId, name, description }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      API.put('files', `/files/${fileId}`, {
        body: {
          name,
          description
        }
      }).then(() => {
        dispatch({ type: UPDATING_FILE_DETAIL_SUCCESS, updated: { fileId, fileName: name, fileDescription: description } });
        resolve();
      }).catch((error) => {
        reject({ error: error.message })
      })
    })

  }
}

export const uploadNewFile = ({ file, name, description }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      uploadToS3(file).then((fileId) => {
        submitNewFileDetails({ name, description, fileId }).then(() => {
          dispatch({ type: UPLOADING_FILE_SUCCESS, uploaded: { fileId, fileName: name, fileDescription: description } });
          resolve();
        }).catch((error) => {
          reject({ error: error.message });
        })
      }).catch((error) => {
        reject({ error: error.message });
      })
    })
  }
}

export const deleteFile = ({ fileId }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      deleteFileFromS3(fileId).then(() => {
        deleteFileDetails(fileId).then(() => {
          dispatch({ type: DELETING_FILE_SUCCESS, fileId })
          resolve()
        }).catch((error) => {
          reject({ error: error.message });
        })
      }).catch((error) => {
        reject({ error: error.message });
      })
    });
  }
}