var request = require('request');

var options = {
  method: 'POST',
  url: 'http://139.199.8.54:4399/user/login',
  headers: {
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded'
  },
  form: { user_name: 'test', password: 'test' }
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);
  console.log(response);
  console.log(body);
});
