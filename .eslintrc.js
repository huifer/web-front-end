module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",    
    // extends: 'airbnb-base', 上一行为不要代码格式化功能，这一行为代码格式化选择 airbnb 的格式规范。
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "no-console": "off",
        // 这里可以设置规则：
        //"off" or 0 - 关闭规则
    //"warn" or 1 - 将规则作为警告打开（不影响退出代码）
    //"error" or 2 - 将规则作为错误打开（退出代码为1）
    }
};