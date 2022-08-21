/**
 * 호이스팅
 * 변수 선언을 끌어 올림
 * 임시적 사각 지대
 * 
 * let, const를 사용하면 호이스팅을 방지할 수 있음
 * 
 */

function foo() {
    console.log(hoist); // hoist 변수가 선언이 안되어 있는데 오류가 안남 -> 이것이 호이스팅
    console.log(hoist2);
    console.log(hoist3);

    var hoist = '호이스팅';
    let hoist2 = '호이스팅';
    const hoist3 = '호이스팅';

    console.log(hoist);
}

foo()