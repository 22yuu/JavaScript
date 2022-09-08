if(!Array.prototype.peek) {
    // undefined에서 ! (not)이 붙으면 true가 됨!!!
    Array.prototype.peek = function() {
        return this[this.length - 1]; // this는 array를 가리킴
    }
}

if(!Array.prototype.isEmpty) {
    Array.prototype.isEmpty = function() {
        return this.length === 0;
    }
}

function answer(train) {
    let stack = [];
    let num = 0;

    for(let i = 0; i < train.length; i++) {
        while(stack.length === 0 || stack[stack.length - 1] < train[i]) {
            stack.push(++num);
        }

        if(stack[stack.length - 1] === train[i]) {
            stack.pop();
        } else {
            return false;
        }
    }    

    return true;
}

function answer2(train) {
    let stack = [];
    let num = 0;

    for(let i = 0; i < train.length; i++) {
        while(stack.isEmpty() || stack.peek() < train[i]) {
            stack.push(++num);
        }

        if(stack.peek() === train[i]) {
            stack.pop();
        } else {
            return false;
        }
    }    

    return true;
}


let input = [
    [1,2,3],
    [3,2,1],
    [3,1,2]
]

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer2(input[i]));
}