typeof undefined            // undefined
typeof true                 // boolean
typeof 'string'             // string
typeof 123                  // number
typeof 9007199254740992n    // bigint
typeof Symbol()             // symbol
typeof null                 // object -> null 값은 primitive 값이지만 타입 오류로 object로 표기됨

const test = 'string'
console.log(test.toLowerCase()); // STRING

console.log(test); // string 