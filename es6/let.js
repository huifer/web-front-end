{
  let a = 1;
  var b = 1;
}

for (let index = 0; index < 10; index++) {
  console.log(index);
}

// console.log(index);
/*
console.log(index);
            ^

ReferenceError: index is not defined
    at Object.<anonymous> (g:\redis-jq\web-front-end\es6\tempCodeRunnerFile.js:10:13)
    at Module._compile (internal/modules/cjs/loader.js:959:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:995:10)
    at Module.load (internal/modules/cjs/loader.js:815:32)
    at Function.Module._load (internal/modules/cjs/loader.js:727:14)
    at Function.Module.runMain (internal/modules/cjs/loader.js:1047:10)
    at internal/main/run_main_module.js:17:11
*/

// let 局部有效
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function() {
    // 这个i每次只有当前循环次有效
    console.log('let 当前输出:' + i);
  };
}
a[3](); //3

// var 全局有效
var b = [];
for (var i = 0; i < 10; i++) {
  b[i] = function() {
    // 这个i每次都会重新指向全局变量i,每次循环都会修改i值
    console.log('var 当前输出:' + i);
  };
}

b[3](); //10
