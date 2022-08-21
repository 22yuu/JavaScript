/**
 * arguments 
 * 
 * arguments 객체는 함수에 전달된 인수에 해당하는 Array 형태의 객체입니다.
 * - 배열처럼 생겼지만 객체임
 * - arguments 객체는 화살표 함수에는 존재하지 않음
 */

function func() {
 // arguments 객체는 인자를 선언 안해도 사용 가능
 Array.isArray(arguments) // false
 const convertArr = Array.from(arguments); // Array.from 메서드로 배열로 형변환
 return arguments[0]
}

console.log(func(1,2,3,4,5,6,7));
