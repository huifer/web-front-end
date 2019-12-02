# node 回调
## 什么是回调
> 回调函数就是一个通过函数指针调用的函数。如果你把函数的指针（地址）作为参数传递给另一个函数，当这个指针被用来调用其所指向的函数时，我们就说这是回调函数。回调函数不是由该函数的实现方直接调用，而是在特定的事件或条件发生时由另外的一方调用的，用于对该事件或条件进行响应。
- 例: 读取文件,在读取文件后将文件内容作为参数进行传递
## 实战
- 传统方式: 命令式一步一步做,
```js
import { readFileSync, readFile } from 'fs';

let data = readFileSync('./input.json');
let student_json = JSON.parse(data);
console.log(student_json);
```
- 回调方式
```js
'use strict';

import { readFileSync, readFile } from 'fs';


readFile('./input.json', (err, data) => {
    // 这个函数就是回调函数
  if (err) throw err;
  let student = JSON.parse(data);
  console.log(student);
});

```
- 输出结果
```
{
  name: 'Sara',
  age: 23,
  gender: 'Female',
  department: 'History',
  car: 'Honda'
}
```
