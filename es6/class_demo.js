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