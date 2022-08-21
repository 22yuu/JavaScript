const word = '문자1'
const word2 = "문자2"
const word3 = `문자3

백틱을 이용하면

개행문자 없이 개행이 가능함! 최신기술임

최신기술 활용하자!

`;

console.log(word[0]); // 문 -> 배열처럼 인덱싱으로 사용해서 하나하나 가져올 수 있음

// 문자열 길이
console.log(word.length); // 2

const words = word + '  ' + word2

console.log(words);
console.log(word3);