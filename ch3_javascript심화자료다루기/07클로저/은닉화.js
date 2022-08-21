/**
 * Closure - 은닉화
 */

function privateData() {
    let temp = 'a';

    return {
        value: function() {
            return temp;
        },
        changeValue: function(newVal) {
            temp = newVal;
        }
    }
}

const private = privateData();
const private2 = privateData();

private.value();
private.changeValue('b');
private.value();
private2.value();

function CounterApp(initValue) {
    let countValue = initValue ?? 0; // ?? 2개는 뭐냐

    return {
        value: function() {
            return countValue
        },
        increment: function() {
            countValue++;
        },
        decrement: function() {
            countValue--;
        },
    };
}

const counter1 = CouanterApp(1);
const counter2 = CouanterApp(2);

counter1.value();
counter2.value();

counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();

counter1.value(); // 5
counter2.value(); // 2