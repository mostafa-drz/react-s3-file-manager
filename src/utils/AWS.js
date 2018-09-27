import Amplify from 'aws-amplify';
import aws_config from '../AWSConfig';

export const initalizeAWS = () => {
  Amplify.configure({
    Auth: {
      region: aws_config.cognito.REGION,
      userPoolId: aws_config.cognito.USER_POOL_ID,
      userPoolWebClientId: aws_config.cognito.APP_CLIENT_ID
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