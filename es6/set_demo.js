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
