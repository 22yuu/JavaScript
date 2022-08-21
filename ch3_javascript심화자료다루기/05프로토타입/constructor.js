/**
 * 생성자
 * 
 */

 function Person(name, age) {
    this.name = name;
    this.age = age;
}

const jang = new Person('jang', 99);
const hs = new Person('hs', 11);

console.log(jang.constructor.name);
console.log(hs.constructor.name);

const obj = {};
const arr = [];
const func = function () {};
const str = new String('str');

obj.constructor.name
arr.constructor.name
func.constructor.name
str.constructor.name

console.log(obj instanceof Object)
console.log(arr instanceof Array)
console.log(func instanceof Function)
console.log(str instanceof String)