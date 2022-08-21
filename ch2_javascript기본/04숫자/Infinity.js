/**
 * 
 * Infinity
 *  너무 크거나 작다
 *  지수 1023까지만 허용
 */

Math.pow(2, 1024) // Infinity 지수 초과
7 / 0 // Infinity 계산이 불가능할 때

// 오류는 아니다...

// infinity 검사

const result = isFinite(Math.pow(2, 1024));

console.log(result); // false;