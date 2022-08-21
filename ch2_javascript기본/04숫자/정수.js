/**
 * # 정수(Integer)
 * - 자바스크립트에는 부동소수점(IEEE-754) 숫자만 존재
 * - 정수를 저장하는 2가지 방법
 * 1. 10진 소수가 없는 작은 숫자는 정수로 오래 유지 (예. 31비트)
 * 2. 비트 연산자를 이용 32비트 정수로 바꿔 반환
 */

// 안전한 정수의 최대값
Number.MAX_SAFE_INTEGER

// 안전한 정수의 최소값
Number.MIN_SAFE_INTEGER

// 소수점을 다루는 방법
// 내림
Math.fllor(4.2) // 4
// 올림
Math.ceil(4.9) // 5
// 반올림
Math.round(4.6) // 5


// 정수로 변환
parseInt('10'); // -> parseInt의 경우 2번째 인자에 radix 파라미터 값이 있음 이것은 진수를 의미 Default는 10진수!
Number('10');

// 정수 판별
Number.isInteger();

// NaN(Not a Number)
// 숫자로 읽어낼 수 없다.
// 잘못된 계산 결과식
// 정의할 수 없는 결과식
// 문자열이 포함된 계산식 (덧셈 제외)

// 느슨하게 검사
isNaN(undefined);   // true
isNaN({});          // true
isNaN('문자열');    // true

// ES2015+ 엄격하게 검사
Number.isNaN(undefined); // false
Number.isNaN({});        // false
Number.isNaN('문자열');  // false

