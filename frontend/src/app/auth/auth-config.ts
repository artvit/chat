import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {

  issuer: 'https://accounts.google.com',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  redirectUri: window.location.origin,
  clientId: '82175669431-nert4kdgvv223nnajge4iqeoenkoe27i.apps.googleusercontent.com',
  strictDiscoveryDocumentValidation: false,
  scope: 'profile email',
  showDebugInformation: true,
  sessionChecksEnabled: true,
  sessionCheckIFrameUrl: 'https://www.googleapis.com/oauth2/v3/tokeninfo'
};
