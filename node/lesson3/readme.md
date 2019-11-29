# node 并发 async
- `npm install async --save`
- 导入`var async = require('async');`
```js
var async = require('async');
// 创建测试数据
ar data_list = ['1','2','3','4','5','6','7','8','9','0'];
// 创建线程数记录器
var concurrencyCount = 0;

// 处理函数
var fetchUrl = function(data, callback) {
  concurrencyCount++;
  console.log(new Date().getTime() + '现在的并发数是', concurrencyCount, ', 数据: ', data);

  // 具体业务, 这里的callback 指的就是async.mapLimit,最后的参数callback
  setTimeout(function() {
    concurrencyCount--;
    if (data ==='0') {
        // 故意抛出错误
      callback('error_data');
    } else {
      callback(null, data);
    }
  }, 1);
};




/**
 * 第一个参数,需要处理的数据
 * 第二个参数, 允许开放多少个并发,从运行结果看是否有效
 * 第三个参数,处理逻辑
 * 第四个参数,结果处理
 */
async.mapLimit(
  data_list,
  3,
  function(url, callback) {
    fetchUrl(url, callback);
  },
  function(err, result) {
    console.log('处理失败' + err);
    console.log("成功"+result);
  }
);

```

输出结果
```
1575014361390现在的并发数是 1 , 数据:  1
1575014361399现在的并发数是 2 , 数据:  2
1575014361400现在的并发数是 3 , 数据:  3
1575014361401现在的并发数是 3 , 数据:  4
1575014361402现在的并发数是 3 , 数据:  5
1575014361402现在的并发数是 3 , 数据:  6
1575014361403现在的并发数是 3 , 数据:  7
1575014361403现在的并发数是 3 , 数据:  8
1575014361404现在的并发数是 3 , 数据:  9
1575014361406现在的并发数是 3 , 数据:  0
处理失败error_data
成功1,2,3,4,5,6,7,8,9,
```
从输出结果看我们可以发现并发数从1逐渐增长到3直到处理完成.