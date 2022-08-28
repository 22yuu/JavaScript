/**
 * CommonJS (Import)
 */

const Person = require('./CommonJS-person'); // 가져오기

const me = new Person('LEE', 29, 'Korea');
const you = new Person('Nico', 20, 'Japan');

console.log(me.getName());
console.log(you.getName());