/**
 * Callback
 * 
 */

console.log('1');

setTimeout(() => {
    console.log('2')
}, 1000);

console.log('3');

// 다양한 callback 유형이 있음
const isFilter = function(ele) {
    console.log(ele);
};

[1,2,3].filter(isFilter);