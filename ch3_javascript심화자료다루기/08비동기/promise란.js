/**
 * Promise
 * 
 * Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타낸다.
 * 
 * Promise는 프로미스가 생성된 시점에는 알려지지 않았을 수도 있는 값을 위한 대리자로, 비동기 연산이 종료된 이후에
 * 결과 값과 실패 사유를 처리하기 위한 처리기를 연결할 수 있습니다. 프로미스를 사용하면 비동기 메서드에서 마치 동기 메서드처럼
 * 값을 반환할 수 있습니다. 다만 최종 결과를 반환하는 것이 아니고, 미래의 어떤 시점에 결과를 제공하겠다는 '약속'(프로미스)를 반환합니다.
 * 
 * Promise는 다음 중 하나의 상태를 가집니다. 
 * - 대기(pending): 이행자도, 거부하지도 않은 초기 상태.
 * - 이행(fulfilled): 연산이 성공적으로 완료됨
 * - 거부(rejected): 연산이 실패함.
 * 
 * then 메서드에 의해 대기열(큐)에 추가된 처리기들이 호출됩니다.
*/

const promiseResolve = Promise.resolve('성공');
const promiseReject = Promise.resject('실패');

const res = promiseResolve.then((resolve) => console.log(resolve));

console.log(res);

// promise 체인닝

promiseResolve
.then((resolve) => {
    console.log('1회' + resolve);
    return promiseResolve
})
.then((resolve) => {
    console.log('2회' + resolve);
    return promiseResolve
})
.then((resolve) => {
    console.log('3회' + resolve);
    return promiseResolve
})
.then((resolve) => {
    console.log('4회' + resolve);
    return promiseResolve
})

// reject 

promiseResolve
.then((resolve) => {
    console.log('1회' + resolve);
    return promiseResolve
})
.then((resolve) => {
    console.log('2회' + resolve);
    return promiseReject // 1회 성공, 2회 성공 출력 후 오류!!!!
})
.then((reject) => {
    console.log('3회' + reject);
    return promiseResolve
})
.then((resolve) => {
    console.log('4회' + resolve);
    return promiseResolve
})

// catch를 이용해 reject 넘어감
promiseResolve
.then((resolve) => {
    console.log('1회' + resolve);
    return promiseResolve
})
.then((resolve) => {
    console.log('2회' + resolve);
    return promiseReject 
})
.catch((reject) => {
    console.log('3회' + reject); // catch를 이용해 3회 실패 출력 후 4회 성공까지 출력!
    return promiseResolve
})
.then((resolve) => {
    console.log('4회' + resolve);
    return promiseResolve
})

/**
 * New Promise
 * 
 */

const one = Promise.resolve('1');
const two = (delay) =>
 new Promise((resolve) => {
    setTimeout(() => {
        resolve('2');
    }, delay)
})
const three = Promise.resolve('3');

one
.then((oneRes) => {
    console.log(oneRes);
    return two(3000);
})
.then((twoRes) => {
    console.log(twoRes);
    return three;
})
.then((threeRes) => {
    console.log(threeRes);
})
.finally(() => console.log('END'));


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