# LiVariants OAuth2 API example application

Here's how to make a "Login with LiVariants" button on your web app.

1. Create a LiVariants OAuth app at https://livariants.org/account/oauth/app
  - Homepage URL: http://localhost:8087
  - Callback URL: http://localhost:8087/callback
2. Edit index.js to set the oauth app client id and secret
3. Install dependencies with `yarn install`
4. Run the webserver with `yarn start`
5. Browse to https://localhost:8087
