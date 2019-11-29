import format from 'string-format';
import express from 'express';
import multipart from 'connect-multiparty';
import bodyParser from 'body-parser';

var app = express();
var multipartMiddleware = multipart();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.get('/', function(req, res) {
  let query = req.query;
  console.log(query);
  let jsonStr = JSON.stringify(query);
  res.send(format('参数={}', jsonStr));
});

// www-form-urlencoded
app.post('/ud', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

// form-data
app.post('/fd', multipartMiddleware, function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.post('/json', function(req, res) {
  res.send(JSON.stringify(req.body));
});

app.listen(3000);
