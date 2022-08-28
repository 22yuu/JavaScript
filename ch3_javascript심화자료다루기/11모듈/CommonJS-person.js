/**
 * CommonJS (Export)
 */

function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;

    this.getName = function () {
        return this.name + ' 입니다.';
    }
}

const a = 'a';

module.exports = Person;

/**
 * 여러개 내보낼 수 있음
 * 
 * module.exports = {
 *  Person: Person,
 *  a: a
 * }
 */