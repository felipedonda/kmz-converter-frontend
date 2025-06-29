import { awsEnv } from './aws-env';

const awsConfig = {
  Auth: {
    region: awsEnv.region,
    userPoolId: awsEnv.user_pool_id,
    authority: `https://cognito-idp.${awsEnv.region}.amazonaws.com/${awsEnv.user_pool_id}`,
    client_id: awsEnv.client_id,
    redirect_uri: awsEnv.redirectUri,
    response_type: awsEnv.responseType,
    scope: awsEnv.scope,
  },
};

export default awsConfig;
