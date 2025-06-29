'use client';

import { AuthProvider } from "react-oidc-context";
import awsConfig from "@/config/aws-config";

const cognitoAuthConfig = {
    authority: awsConfig.Auth.authority,
    client_id: awsConfig.Auth.client_id,
    redirect_uri: awsConfig.Auth.redirect_uri,
    response_type: awsConfig.Auth.response_type,  
    scope: awsConfig.Auth.scope,
}

export default function AuthProviderComponent({ children }: { children: React.ReactNode }) {
    console.log("Cognito Auth Config:", cognitoAuthConfig);
    return (
        <AuthProvider {...cognitoAuthConfig}>
            {children}
        </AuthProvider>
    );
}