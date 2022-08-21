/**
 * Bigint
 * 
 * 안정적인 범위의 정수
 *  
 */

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308, undefined -> 자바스크립트가 표현할 수 있는 가장 큰 수

// BigInt
// 원시 값이 안정적으로 나타낼수 있는 최대치

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// MAX_SAFE_INTEGER는 비교적 최신 문법으로 IE에서 사용 불가능함
console.log(123213213123213213213123123123123n); // 큰 수 뒤에 n을 붙이면 전부 표현해줌 n을 붙이지 않을 경우 1.23123123123123e+12 이런식으로 이상한 값으로 나타남
console.log(BigInt(123213213123213213213123123123123)) // 혹은 BigInt 함수 사용

