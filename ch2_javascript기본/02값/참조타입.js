const object = {};
const array = [];
function func() {}

console.log(object instanceof Object); // true
console.log(func instanceof Function); // true
console.log(array instanceof Array); // true

console.log(Object.prototype.toString(array)); // [object Array]
console.log(Object.prototype.toString(func)); // [object Function]
console.log(Object.prototype.toString(object)); // [object Ojbect]

// 자바스크립트 언어는 타입에 대해서 굉장히 느슨하기 때문에 자바스크립트 개발자는 타입에 대해서 유심히 살펴보고 개발 해야한다.
