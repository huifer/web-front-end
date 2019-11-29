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