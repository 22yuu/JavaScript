/**
 * 명시적 this 바인딩
 * 
 * call
 * apply
 * bind
 */
const person = {
    name: '현석',
    sayName: function() {
        return this.name + '입니다.';
    },
};

const zero = {
    name: '베이스',
    sayName: function() {
        return this.name + '입니다.';
    },
};

// 반드시 var보다는 const를 사용
// 실제로 브라우저 console에서 실험해보면 됨 
// var로 선언하면 전역으로 설정되기 때문에 누구나 접근가능!!!

function sayFullName(firstName) {
    return firstName + this.sayName()
}

// call
const result = sayFullName.call(person, '장');
const result2 = sayFullName.call(zero, 'Jang');
console.log(result)
console.log(result2)

// apply는 배열을 사용 가능함

function sayFullNameApply() {
    return arguments[1] + this.sayName() + arguments[0];
}

const result3 = sayFullNameApply.apply(person, ['장', 'Jang']);
const result4 = sayFullNameApply.apply(zero, ['Zero', 'Jang']);

console.log(result3)
console.log(result4)

// 이렇게 일일이 객체와 추가 파라미터를 적는 것은 비효율적? 귀찮
// 그래서 bind를 사용
const sayFullNamePerson = sayFullName.bind(person);
const sayFullNameZero = sayFullName.bind(zero);

console.log(sayFullNamePerson('장'))
console.log(sayFullNameZero('제로'))
