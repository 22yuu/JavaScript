/**
 *  암시적 & 명시적
 */

// !! => Boolean
// Number(값) String(값) Boolean(값) Array.from() <- 명시적인 형변환

const result1 = 1 + ' 입니다.'; // 1입니다.
// 타입은?
console.log(typeof result1) // string


const result2 = '11' + 11; // 1111
// 타입은?
console.log(typeof result2) // string

const result3 = '2' * '2'; // 4
const result4 = '5' * 3; // 15

console.log(typeof result3); // number
console.log(typeof result4); // number

const result5 = ['111'] + 111

console.log(typeof result5); // string

