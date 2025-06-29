export const awsEnv = {
  region: process.env.NEXT_PUBLIC_REGION as string,
  user_pool_id: process.env.NEXT_PUBLIC_USER_POOL_ID as string,
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
  redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI as string,
  responseType: process.env.NEXT_PUBLIC_RESPONSE_TYPE as string,
  scope: process.env.NEXT_PUBLIC_SCOPE as string,
};