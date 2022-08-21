/**
 * 프로퍼티 접근자 (getter, setter)
 */

const person = {
    _firstName: 'jang',
    lastName: 'hyeon-seok',

    // getter
    get firstName() {
        return this._firstName.toUpperCase(); // this -> person
    },

    // setter
    set firstName(newFirstName) {
        // setter를 쓰는 이유 -> 이름을 받아야하는데, 사용자가 엉뚱하게 정수 값등 string이 아닌 타입으로 입력을 방지하는 등 처리를 할 수 있음
        if(typeof newFirstName !== 'string') {
            this._firstName = 'undefined name';
            return;
        }
        this._firstName = newFirstName;
    }
}

console.log(person._firstName); // 바로 프로퍼티 호출 jang
console.log(person.firstName); // getter에 의해서 대문자로 출력됨 JANG

// setter에 의해 값이 변경
person.firstName = 123456