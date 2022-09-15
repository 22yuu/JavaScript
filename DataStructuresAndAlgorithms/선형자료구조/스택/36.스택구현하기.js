// Stack():생성자 함수
function Stack(array) {
    this.array = array ? array : []
}

// getBuffer(): 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function() {
    return this.array.slice();
}

// isEmpty(): 객체 내 데이터 O/X
Stack.prototype.isEmpty = function() {
    return this.array.length === 0;
}

// push(): 데이터 추가
Stack.prototype.push = function(item) {
    return this.array.push(item);
}

// pop() : 데이터 삭제
Stack.prototype.pop = function() {
    if(this.isEmpty()) {
        process.stdout.write('Stack is already Empty!!');
        return;
    }
    return this.array.pop();
}

// peek(): 가장 끝 데이터 반환
Stack.prototype.peek = function() {
    return this.array[this.array.length - 1];
}

// size(): 스택 내 데이터 개수 확인
Stack.prototype.size = function() {
    return this.array.length;
}

// indexOf(): 매개변수로 넣어온 element 위치 확인
Stack.prototype.indexOf = function(element, position = 0) {
    /* for문으로 직접 구현
    for(let i = position; i < this.array.length; i++) {
        if(element === this.array[i]) return i;
    }
    return -1; */

    // array의 메서드 활용
    return this.array.indexOf(element, position);
};

// includes(): 데이터 존재 여부 확인
Stack.prototype.includes = function (element) {
    // return this.array.includes(element);
    for(let i = 0; i < this.array.length; i++) {
        if(element === this.array[i]) return true;
    }
    return false;
}


let stack = new Stack([1, 2, 3]);

console.log(stack);

let data = stack.getBuffer();
console.log(data);
console.log(data === stack.array); // false -> 값이 정상적으로 복사되었다!

console.log(stack.isEmpty());
console.log(Object.getOwnPropertyDescriptors(Stack.prototype));

stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
console.log(stack);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack);

console.log(stack.indexOf(1));
console.log(stack.indexOf(1, 2));

console.log(stack.includes(1));
console.log(stack.includes(2));
console.log(stack.includes(4));