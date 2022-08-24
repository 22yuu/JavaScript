/**
 * async & await를 이용한 비동기
 */


// async 아래의 두 foo 함수는 동일한 동작임
async function foo() {
    return 1
}

function foo() {
    return Promise.resolve(1);
}

// await는 async 키워드 안에 쓸 수 있는 키워드로 then과 유사한 기능을 수행한다.
// mdn : await는 Promise를 기다리기 위해 사용됩니다. 연산자는 async function 내부에서만 사용할 수 있습니다.
async function foo() {
    await 1;
}

function foo() {
    return Promise.resolve(1).then(() => undefined);
}

// 만약 Promise가 await에 넘겨지면 await는 Promise가 fulfill되기를 기다렸다가, 해당 값을 리턴
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    })
}

async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x);
}

f1();


/*
기존의 스타벅스를 async & await 형식으로 변경
const starbucks = function(coffeeName) {
    return new Promise((resolve, reject) => {
        if(coffeeName === '아메리카노') {
            resolve('아메리카노 한잔입니다.')
        } else {
            reject('아메리카노는 없습니다.')
        }
    });
};

starbucks('아메리카노')
.then((res) => console.log(res))
.catch((rej) => console.log(rej))
.finally(() => console.log('감사합니다.'));

*/

const starbucks = function(coffeeName) {
    return new Promise((resolve, reject) => {
        if(coffeeName === '아메리카노') {
            resolve('아메리카노 한잔입니다.')
        } else {
            reject('아메리카노는 없습니다.')
        }
    });
};

async function americano(someDrink) {
    try {
        const result = await starbucks(someDrink);
        return result;
    } catch(error) {
        console.log(error);
    } finally {
        console.log('감사합니다');
    }
}

americano('아메리카노');