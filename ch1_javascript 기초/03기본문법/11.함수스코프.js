/**
 * Scope(스코프)
 * - 변수 유효 범위
 * - 내부에서 외부로 접근 가능
 * - 외부에서 내부로 접근 불가능
 * 처음부터 => var 
 * ES2015+ => let, const
 */

// 여기 선언된 변수들은 파일 내 어디든 사용 가능
var globalVal = '전역 변수'
var varVal = '함수-단위'
const constVal = '블럭-단위'

//console.log(num); // 0이 출력됨 test 함수에서 var로 선언하였지만 함수 단위이기 떄문에 스코프에 벗어남

function test() {
    console.log(varVal); // 함수-단위 출력!
    var num = 123;
    return 'test';
}

for(var index = 0; index < 3; index++){}

console.log(index) // 3 출력

/**
 * for문을 벗어나면 index 값은 메모리에서 반환되어야 하지만 함수 단위 스코프로 인해서 index 값이 출력이 됨
 * 따라서 for문 내부에서만 사용하려면 let을 사용!!!!
 * 
 * 함수 단위의 경우 블럭 단위보다 범위가 넓기 때문에 전역 변수가 아닌 이상var를 사용하여 선언하는 것은 권장하지 않음
 */
