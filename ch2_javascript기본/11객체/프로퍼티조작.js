/**
 * 프로퍼티 조작
 */

const person = {
    firstName : 'jang',
    location: 'korea',
}

// 추가
person.lastName = 'hyeonseok';
// 수정
person.lastName = 'hyeon-seok';
// 삭제
delete person.location;

// const를 사용했기 때문에 아래의 코드가 안되는게 맞지 않나~? 라는 의문을 가질 수 있는데
// 객체의 경우 블럭 내 재할당이 안되는 것일 뿐 추가, 수정, 삭제는 가능함.