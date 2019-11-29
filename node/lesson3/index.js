var async = require('async');
// 创建测试数据
var data_list = ['1','2','3','4','5','6','7','8','9','0'];
// 创建线程数记录器
var concurrencyCount = 0;

// 处理函数
var fetchUrl = function(data, callback) {
  concurrencyCount++;
  console.log(new Date().getTime() + '现在的并发数是', concurrencyCount, ', 数据: ', data);

  // 具体业务, 这里的callback 指的就是async.mapLimit
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
 * 第二个参数, 允许开放多少个并发
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
