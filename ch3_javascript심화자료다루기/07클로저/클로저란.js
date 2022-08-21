/**
 * Closure
 */

function returnX() {
    let x = 'x';

    return function returnY() {
        return x + 'y';
    };
}

const x = returnX();

typeof x; // function 

function sum(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        };
    };
};

const sum = (num1) => (num2) => (num3) => num1 + num2 + num3;

const sum5 = sum(5);
const sum10 = sum(10);
sum5(10); // 15
sum5(20); // 25
sum5(30); // 35

sum10(5); // 15
sum10(15); // 25