# node 模块
## 如何使用模块
- https://www.npmjs.com/get-npm
- node使用中很多模块别人会写好放到npm中,与此同时我们可以从npm下载所需要的包进行使用
- NPM是js的包管理工具
- 通过`npm install package_name`进行下载安装, `--save`会把下载的包写入`package.json`文件中
    - 如: `npm install string-format --save`
```json
{
  "name": "lesson2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "huifer",
  "license": "Apache-2.0",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "rimraf": "^3.0.0"
  },
  "dependencies": {
    "string-format": "^2.0.0"
  }
}

```

## express请求参数获取
### get 请求
```js
app.get('/', function(req, res) {
  let query = req.query;
  console.log(query);
  let jsonStr = JSON.stringify(query);
  res.send(format('参数={}', jsonStr));
});

```
```sh
curl "localhost:3000/?a=1&b=2"
# 参数={"a":"1","b":"2"}
```
### post 请求
post 请求获取参数一般有两种 x-www-form-urlencoded \ json \ form-data

为获取post请求的参数需要导入
```js
import multipart from 'connect-multiparty';
import bodyParser from 'body-parser';
```
具体使用如下
```js
var multipartMiddleware = multipart();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
```

####  application/x-www-form-urlencoded
```js
// www-form-urlencoded
app.post('/ud', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});
```
```
$ curl -d "p1=a&p2=b" -H  "Content-Type: application/x-www-form-urlencoded" -X POST "localhost:3000/ud"
{"p1":"a","p2":"b"}
```
#### application/json
```js
app.post('/json', function(req, res) {
  res.send(JSON.stringify(req.body));
});
```
```
$ curl localhost:3000/json -X POST -d '{"hello": "world"}' --header "Content-Type: application/json"
{"hello":"world"}
```
#### form-data
```js
// form-data
app.post('/fd', multipartMiddleware, function(req, res) {
  console.log(req.body);
  res.send(req.body);
});
```
```
$ curl localhost:3000/fd  -F hello=world
{"hello":"world"}
```