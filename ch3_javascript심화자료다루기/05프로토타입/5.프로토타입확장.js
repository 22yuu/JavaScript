/**
 * 프로토타입 확장 (extends, 상속)
 * 
 * 부모 => 확장 => 자식
 */

// super class 상위 클래스
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


