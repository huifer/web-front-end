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
