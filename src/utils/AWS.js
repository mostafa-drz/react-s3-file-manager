import Amplify, {
  Storage, API
} from 'aws-amplify';
import aws_config from '../AWSConfig';
export const MAX_FILE_SIZE = 10000000;
export const initalizeAWS = () => {
  Amplify.configure({
    Auth: {
      region: aws_config.cognito.REGION,
      userPoolId: aws_config.cognito.USER_POOL_ID,
      userPoolWebClientId: aws_config.cognito.APP_CLIENT_ID,
      identityPoolId: aws_config.cognito.IDENTITY_POOL_ID
    },
    Storage: {
      region: aws_config.S3.REGION,
      bucket: aws_config.S3.BUCKET,
      identityPoolId: aws_config.cognito.IDENTITY_POOL_ID
    },
    API: {
      endpoints: [{
        name: 'files',
        endpoint: aws_config.aoiGateway.URL,
        region: aws_config.aoiGateway.REGION
      }]
    }
  });
}

export const uploadToS3 = (file) => {
  return new Promise((resolve, reject) => {
    if (file.size > MAX_FILE_SIZE) {
      return reject({ error: { message: `The file size has to be less than ${MAX_FILE_SIZE / 1000000} MB` } })
    }
    const filename = `${Date.now()}-${file.name}`;
    Storage.vault.put(filename, file, { contentType: file.type }).then((stored) => {
      resolve(stored.key);
    }).catch((error) => {
      console.log(error);
      reject(error);
    });
  })
}

export const submitNewFileDetails = ({ name, description, fileId }) => {
  return new Promise((resolve, reject) => {
    API.post('files', '/files', {
      body: {
        name,
        description,
        fileId
      }
    }).then((resp) => {
      resolve();
    }).catch((error) => {
      console.log(error);
      reject(error);
    })
  });
}


export const deleteFileFromS3 = (fileId) => {
  return new Promise((resolve, reject) => {
    Storage.remove(fileId, { level: 'private' }).then(resolve).catch((error) => { reject({ error: error.message }) });
  });
}

export const deleteFileDetails = (fileId) => {
  return new Promise((resolve, reject) => {
    API.del('files', `/files/${fileId}`).then(resolve).catch((error) => { reject({ error: error.message }) });
  })
}