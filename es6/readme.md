<!--
 * @Author: your name
 * @Date: 2019-11-28 17:12:50
 * @LastEditTime: 2019-11-29 10:13:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-front-end\es6\readme.md
 -->
# ES6 
## let
- `let`用于声明变量,且`let`只会在当前代码块生效,`for`循环使用时可用`let`
```js
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
```
## const 
- `const`用于声明只读变量,可以理解为常量例如pi
- `const`声明的变量必须一开始就赋值
- 只在块级作用域中生效
```js
const pi = 3.14;
console.log(pi);

// pi = 1; // TypeError: Assignment to constant variable.

// const a ;//SyntaxError: Missing initializer in const declaration
```

## 函数默认值
- 基本用法
```js
function ac(a = 1) {
  console.log(a);
}

ac();//1
```
## set 
```js
// 通过new Set() 创建
let set_data = new Set();
for (let i = 0; i < 10; i++) {
  // add方法添加元素
  set_data.add(i);
}

// 遍历
set_data.forEach(x => {
  console.log(x);
});

// 通过传入list创建
let set_1 = new Set([1, 2, 2, 3]);
console.log(set_1);

// 转换为数组
let arr_1 = Array.from(set_1);
console.log(arr_1);

// 交集
let a = new Set([1, 2, 3]);
let b = new Set([2, 3, 4]);
let intersect = new Set([...a].filter(x => b.has(x)));
console.log(intersect);
// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference);
// 并集
let union_set = new Set([...a, ...b]);
console.log(union_set);
```

## map
```js
// 初始化
let m = new Map();

m.set('a', '1');
m.set('b', 2);
m.set(3, 'c');
m.set(1, 1).set(2, 2);

console.log(m);

// 获取值
console.log(m.get('a'));

// 遍历
m.forEach((k, v) => {
  console.log(k, v);
});

for (let key of m.keys()) {
  console.log(key);
}

for (let v of m.values()) {
  console.log(v);
}

// 数据转换
ks = [...m.keys()];
vs = [...m.values()];
m_list = [...m];
console.log(ks);
console.log(vs);
console.log(m_list);

// map 转换成对象
function map2Obj(map) {
  let obj = Object.create(null);
  for (const [k, v] of map) {
    obj[k] = v;
  }
  return obj;
}

const m1 = new Map().set(1, 'a').set(2, 'b');

let b = map2Obj(m1);
console.log(b);
// 对象转map
function obj2map(obj) {
  let map = new Map();
  for (const k of Object.keys(obj)) {
    map.set(k, obj[k]);
  }
  return map;
}
let c = obj2map({ yes: true, no: false });
console.log(c);

// map 转json
function map2json(map) {
  return JSON.stringify(map2Obj(map));
}

let d = map2json(m1);
console.log(d);

// map to json array 
function map2jsonArray(map
    ) {
    return JSON.stringify([...map])
}
let myMap = new Map().set({1: "a"}, ['abc']);
console.log(map2jsonArray(myMap))

```
## class
```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '( x = ' + this.x + ' , y = ' + this.y + ' )';
  }
  static staticFunction() {
   // 静态方法
    return new Point(1, 1);
  }
}

let p = new Point(1, 2);
let pString = p.toString();
console.log(p);
console.log(pString);

let p2 = Point.staticFunction();
console.log(p2);

class Point3d extends Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}


let p3 = Point3d.staticFunction()
console.log(p3)

let p4 = new Point3d(1,2,3)
console.log(p4)
```

## module 
- 通过`export`和`import`命令组合实现 **模块**
- profile.js
```js
export var project_name = 'web-pc';
export var year = 2019;

var auth_name = 'huifer';
export { auth_name };

```
- module_demo.js
```js
import {auth_name,project_name,year} from "./profile.js"
console.log(auth_name,project_name,year)

```