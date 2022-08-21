// 원시값의 래퍼 객체
const bool = false;
const num = 123;
const str = 'string';

const bool2 = new Boolean(false);
const num2 = new Number(123);
const str2 = new String('string');

console.log(typeof bool); // boolean
console.log(typeof bool2); // object

