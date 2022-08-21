/**
 * 객체 생성 방법은 다양함
 * - 클래스를 이용
 * - 리터럴 방식
 */

// 싱글 리터럴 객체
const object = {
    // key, property : value

    property : 'value',
    method: function() {},
}

// 생성자를 이용해서 생성
function NewObject(name) { // PascalCase 
    this.name = name;
}

const newObject = new NewObject('jang'); // {name: 'jang'}

// create 메서드를 이용
//const newObject2 = Object.create(프로토타입, 객체 서술자(기술자))
const newObject2 = Object.create(Object.prototype, {
    // 객체를 서술하는 역할!!! 디테일하게 객체 생성 가능
    name: {
        value: 'jang',
        writable: true, // 덮어 쓸수 있는지
        enumerable: true, // 열거할 수 있는지
        configurable: true, // 객체 서술자를 수정할 수 있는지
    }
})


