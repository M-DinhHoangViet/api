# LiVariants OAuth2 and Board API example application

This app demonstrates "Login with LiVariants"
with persistent session storage,
and playing with the Board API.

1. Create a LiVariants OAuth app at https://livariants.org/account/oauth/app
  - Homepage URL: http://localhost:8076
  - Callback URL: http://localhost:8076/oauth-callback
2. Edit back/src/config.ts to set the oauth app client id and secret
3. Build the front-end:
  - `cd front`
  - `yarn install`
  - `yarn dev` (or `yarn dev -w` to rebuild on save)
4. Build and start the back-end:
  - `cd ../back`
  - `yarn install`
  - `yarn start`
6. Browse to http://localhost:8076. Log in with your livariants account.
7. Play a slow or untimed game vs. the computer on livariants.org. You should see them moves unfold in your app.
