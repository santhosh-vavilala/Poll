interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'E5A6f1g6jDVA32gVB2tYKnyOvBl4vCWY',
  domain: 'traveldairy.auth0.com',
  callbackURL: 'http://localhost:8100/'
};
