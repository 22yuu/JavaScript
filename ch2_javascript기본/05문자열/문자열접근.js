/**
 * 
 * 
 */
const str = 'ABC';

// 소문자로
str.toLowerCase();
// 한글자 추출 - 인덱스
str.charAt(1); // B
// 배열처럼 사용가능
str[1]; // B

// 문자열에서 특정 단어 찾기
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

paragraph.includes('dog');

// index로 찾을수 있음 -> 단어의 첫 글자 인덱스 기준으로 값이 return됨
paragraph.indexOf('dog'); // 40 
paragraph[40]; // d
paragraph[41]; // o
paragraph[42]; // g
