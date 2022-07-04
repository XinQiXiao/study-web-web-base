/// 函数声明和函数表达式区别
const res = sum(10, 20)
console.log(res)

// 1. 函数声明
// 函数提升有预加载 类似 var 变量提升
// function sum(x, y){
//     return x + y  
// }

// 2. 函数表达式
// Uncaught TypeError: sum is not a function
// sum 变量提升了，但是是undefined
// var sum = function(x, y){
//     return x + y
// }
// Uncaught ReferenceError: sum is not defined
// const 变量没有变量提升
const sum = function(x, y){
    return x + y
}