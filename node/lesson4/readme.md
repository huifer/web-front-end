# node 测试库
1. 安装`mocha，should，istanbul`js库
2. 编写代码
```js
/**
 *
 * @param {int} data
 */
function test_func(data) {
  if (data === 0) {
    return 0;
  } else if (data === 1) {
    return 1;
  } else {
    return data;
  }
};

// export { test_func };
// const _test_func = test_func;
// export { _test_func as test_func };
exports.test_func = test_func;

```
3. 编写测试用例
    - 同级目录下创建`test`文件夹 ,文件命名规则: `待测文件名.test.js`
```js
var index = require('../index');
var should = require('should');

describe('test/index.test.js', function() {
  it('should equal 1 when n === 1', function() {
    index.test_func(1).should.equal(1);
  });

  it('should equal 0 when n === 0', () => {
    index.test_func(0).should.equal(0);
  });

  it('should equal 2 when n ===2 ', () => {
    index.test_func(2).should.equal(2);
  });
});

```
2. 执行测试用例
- `npm install mocha -g` 安装全局测试库
```
$ mocha


  test/index.test.js
    √ should equal 1 when n === 1
    √ should equal 0 when n === 0
    √ should equal 2 when n ===2 


  3 passing (29ms)

```
1. 查看测试覆盖率
- `istanbul cover xxx.js`
```
$ istanbul cover index.js
=============================================================================
Writing coverage object [E:\web-fornt\node\lesson4\coverage\coverage.json]
Writing coverage reports at [E:\web-fornt\node\lesson4\coverage]
=============================================================================

=============================== Coverage summary ===============================
Statements   : 28.57% ( 2/7 )
Branches     : 0% ( 0/4 )
Functions    : 0% ( 0/1 )
Lines        : 28.57% ( 2/7 )
================================================================================

```
执行后可以看到目录多了一个coverage文件夹找到`lcov-report/index.html `就可以看到了😋