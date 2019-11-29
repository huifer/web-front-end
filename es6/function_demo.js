function ac(a = 1) {
  console.log(a);
}

ac();
// 如果需要使用参数默认值请对尽可能对每一个都设置
function ab(a, b, c = 1) {
  console.log(a, b, c);
}
ab();
