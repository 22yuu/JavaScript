/**
 * 클래스 확장 (extends, 상속)
 */

 function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

Animal.prototype.getInfo = function() {
    return this.name + '가(이) ' + this.sound + ' 소리를 낸다.'
};

// Sub Class
function Friends(name, sound) {
    Animal.call(this, name, sound); // 여기서 this는 Dog의 인스턴스?
}
Friends.prototype = Object.create(Animal.prototype);
Friends.prototype.constructor = Friends;


const dog = new Friends('개', '멍멍');
const cat = new Friends('고양이', '냐옹');


console.log(dog.getInfo());
console.log(cat.getInfo());

console.log(dog instanceof Friends);
console.log(dog instanceof Animal);

// class를 이용한 확장

// Super Class
class Animal2 {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    getInfo() {
        return (
            this.name +
            '가(이)' +
            this.sound +
            ' 소리를 낸다.'
        );
    }
}

// Sub Class
class Friends2 extends Animal2 {
    constructor(name, sound) {
        super(name, sound); // super를 이용해 부모의 생성자 함수를 호출할 수 있음!!
    }
}


const dog2 = new Friends2('개', '멍멍');
const cat2 = new Friends2('고양이', '냐옹');

console.log(dog2.getInfo());
console.log(cat2.getInfo());
