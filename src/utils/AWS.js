import Amplify from 'aws-amplify';
import aws_config from '../AWSConfig';

export const initalizeAWS = () => {
  Amplify.configure({
    Auth: {
      region: aws_config.cognito.REGION,
      userPoolId: aws_config.cognito.USER_POOL_ID,
      userPoolWebClientId: aws_config.cognito.APP_CLIENT_ID
    }
  });
}