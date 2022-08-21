/**
 * 배열 고차 함수로 조작 (내장 메서드)
 * 
 * map, filter, reduce
 */

const langs = ['JS', 'HTML', 'CSS', 0, 1, 2, 3];

// map
const newLangs = langs.map(function(lang) {
    // 자바스크립트의 map은 배열의 데이터를 새롭게 변형하고 싶을 떄 주로 사용함
    return lang + ' 언어'
}) 

langs
newLangs

// filter
const numbers = langs.filter(function(el) {
    if(typeof el === 'number') {
        return el
    }
})

// 인자를 변수로 만들어서 사용 가능
const isNumber = function(el) {
    if(typeof el === 'number') {
        return el
    }
};

// const isNumber = (el) => typeof el === 'string' // 화살표 함수

const numbers2 = langs.filter(isNumber);

const strings = langs.filter(function(el) {
    if (typeof el === 'string') {
        return el
    }
})

numbers
numbers2
strings

// reduce
// 주로 누적되는 값을 계산할 때 사용함



function sumTotal(...numbers) {
    let temp = 0;

    // for(let i = 0; i < arguments.length; i++) {
    //     temp = temp + arguments[i];
    // }

    for(let i = 0; i < numbers.length; i++) {
        temp = temp + numbers[i];
    }

    // return temp;

    // reduce를 사용하면 위의 for문처럼 작성안해도됨
    return numbers.reduce(function(total, current) {
        return total + current
    }, 0 /*초기값 */);
}

sumTotal(1,2,2,3,4,5,6,7)

