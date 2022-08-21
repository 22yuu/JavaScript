const data = 'a';
const num = 0;
const boolean = true;

// 배열은 객체처럼 취급이 되기 때문에 여러 자료형 데이터를 넣을 수 있음
const arr = [data, num, boolean, 'name']; // 객체처럼 취급되므로 불변값이 아님

console.log(
    arr.length,
    arr[3]
)

// 배열 데이터 값 변경
arr[4] = 'Test';
arr[0] = '첫번째';
arr[1] = 'Second';

console.log(arr);

// 배열에 데이터 삽입
arr.push('마지막 요소 뒤에 삽입');

arr.shift('첫 번째 요소 앞에 새롭게 추가');

console.log(arr);

// 배열 순회 방법 for, forEach
for(let idx = 0; idx < arr.length; idx++) {
 console.log(arr[idx]);
}

arr.forEach(ele => {
    console.log(ele);
});


