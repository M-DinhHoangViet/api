const fetch = require('node-fetch');

/* Create your personal token on https://livariants.org/account/oauth/token */
const personalToken = '';

fetch('https://livariants.org/api/account', {
    headers: {
      'Authorization': 'Bearer ' + personalToken
    }
  })
  .then(res => res.json())
  .then(console.log);
