/**
 * 클래스와 인스턴스
 */

function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.loaction = location
    
    // 이렇게 메서드를 생성하면 안좋다??
    // this.getName = function() {
    //     return this.name + ' 입니다.'; // 이 부분이 객체가 생성될 때 마다 찍히기 때문에 안좋다??
    // };
}

// 이렇게 prototype을 이용해서 따로 함수를 생성하면 메모리 공간도 절약할 수 있고 getName을 재활용할 수 있음
Person.prototype.getName = function() {
    return this.name + ' 입니다';
}

class Person2 {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.loaction = location
    }

    // class를 사용하면 prototype을 사용하지 않고도 메서드를 생성 가능
    getName() {
        return this.name + ' 입니다';
    }

}

const me = new Person('jang', 10, 'Korea');
const you = new Person('lee', 20, 'Korea');

me.getName();
you.getName();