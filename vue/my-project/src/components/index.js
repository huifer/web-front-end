// import request from 'request';
var request = require('request');
var options = {
  method: 'POST',
  url: 'http://139.199.8.54:4399/user/login',
  headers: {
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.45 Safari/537.36 Edg/79.0.309.30'
  },
  form: { user_name: 'test', password: 'test' }
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);

  console.log(response);
  console.log(body);
});
