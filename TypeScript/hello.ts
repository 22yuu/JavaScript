var hello = "hello";
let hello2 = "hello2";
/**
 * tsc hello.ts 로 실행하면 js파일이 생김
 * es6 이전 버전에서도 실행 가능하게 변수 선언부가 var로 바뀜
 * 이 부분을 es6 이후 버전에서 사용되는 let, const로 사용하고 싶으면
 * `tsc hello.ts --target es6` 명령어를 사용하면됨
 * 
 */


let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1 sec');
    }, 1000)
})

timeoutPromise.then(console.log);
/**
 * tsc hello.ts 를 실행할 경우 Promise를 못 찾음
 * tsc hello.ts --lib es5, es2015.promise, es2015.iterable, dom 명령어를 수행하면 됨
 * 
 * tsc hello.ts --lib es2015,dom으로 축약해서 사용함
 */

import add from '../util';
const value = add(1,2);
console.log(value);
/**
 * 노드 버전에 따라 commonjs를 사용한 모듈 방식일 경우
 * tsc hello.ts --target es6 --lib es2015,dom --module commonjs 명령어로 실행
 * 
 * showConfig 설정파일을 작성해 놓으면
 */