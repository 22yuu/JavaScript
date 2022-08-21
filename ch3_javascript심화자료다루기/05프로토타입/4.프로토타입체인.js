/**
 * 프로토타입 체인
 */


// scope 체인
{
    const a = 'outer';
    {
        const a = 'inner';

        console.log(a); // inner
    }
}

[1,2,3]
  .sort((a,b) => a-b)
  .filter((e) => typeof e === 'number')
  .map((e) => e + 'EA');


const array = [];

array.push(10);
array.push(20);

const animal = {
  sayName() {
    return 'ANIMAL';
  }
}

animal.sayName()

const dog = Object.create(animal);
dog.sayName();

