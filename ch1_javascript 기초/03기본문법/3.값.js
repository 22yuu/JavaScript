// 문자열 값 (원시 값)
var str=  'word';
str.toUpperCase();

console.log(str);

const un = undefined;
const nu = null;
const bool = false;
const num = 0;
const str2 = '문자열';
// 원시 값이 아닌 데이터 타입은 즉...! 레퍼런스, 객체 타입!


/**
 * 동등 연산자를 사용할때
 * 엄격한 비교 -> ===
 * 느슨한 비교 -> ==
 */

if(num == 0) {
    console.log('num은 0입니다.');
}

console.log(typeof un); // undefined
console.log(typeof nu); // object
console.log(typeof bool); // boolean
console.log(typeof num); // number
console.log(typeof str2); // string

const obj = {
    name: 'jang',
}

const arr = ['jang']

function func() {
    return 'jang'
}

console.log(typeof obj); // object
console.log(typeof arr); // object
console.log(typeof func); // function