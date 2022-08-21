/**
 * 배열 요소 정렬
 */

const numbers = [4,2,5,1,3];
const strings = ['마', '가', '라', '나', '다'];

const orderedNumbers = numbers.sort(function(a, b) {
    return a - b;
});

// 문자열을 정렬할 경우 localeCompare를 활용
// const desc = (a,b) => b.localeCompare(a);
// sort의 경우 원본 훼손된다는 점 참고!! 
const orderedString = strings.sort(function(a, b) {
    return a.localeCompare(b);
}) 

// const descString = strings.sort(desc);

orderedNumbers
orderedString
// descString
strings