/**
 * 생성자
 */
function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
}

const me = new Person('jang', 10, 'korea');
const you = new Person('kim', 20, 'korea');