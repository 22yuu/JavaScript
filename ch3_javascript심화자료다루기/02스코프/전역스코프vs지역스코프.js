/**
 * 
 * 전역 스코프 (Global)
 * 
 * 지역 스코프
 * ㄴ함수 스코프 
 * ㄴ블록 스코프
 * 
 */

let foo = 'foo' // 전역 스코프

{
    console.log(foo);
}

function func() {
    foo = '전역변수는 어디서든 사용가능하지만 어디서든 재할당 가능해서 조심해서 사용'
    console.log(foo);
}

if(true) {
    foo = 'fooooooooooooo'
    console.log(foo);
}

console.log(foo);

/**
 * 전역 객체
 *  1. 브라우저 => window
 *  2. NodeJS => global
 */