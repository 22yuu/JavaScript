/**
 * 큐 최적화
 * 방식 개선: enqueue/dequeue 방식을 push/shift에서 index로 변경(shift는 O(n), index는 O(1))
 */

// Queue() : 생성자 함수로 초기 데이터 설정
function Queue(array) {
    this.array = array ? array : [];
    this.tail = array ? array.length : 0; // array에 값이 있으면 
    this.head = 0;
}

// getBuffer(): 객체 내 데이터 셋 반환
Queue.prototype.getBuffer = function() {
    return this.array.slice();
};

// isEmpty(): 객체 내 데이터 O/X
Queue.prototype.isEmpty = function() {
    return this.array.length === 0;
};

// enqueue(): 데이터 추가
Queue.prototype.enqueue = function(element) {
    return (this.array[this.tail++] = element); 
    // 현재 tail의 값에 element를 넣고 tail을 증가시킨다. -> 배열 안의 값은 0부터 시작함 -> tail은 array.length의 값을 가지고 있음
}

// dequeue(): 데이터 삭제
Queue.prototype.dequeue =function() {
    // return this.array.shift();
    if(this.tail === this.head) return undefined;

    let element = this.array[this.head];
    delete this.array[this.head++];
    return element;
}

// front(): 가장 첫 데이터 반환
Queue.prototype.front = function() {
    return this.array.length === 0? undefined:this.array[0];
}

// size(): 큐 내 데이터 개수 확인
Queue.prototype.size = function() {
    return this.array.length;
}

// claer(): 큐 초기화
Queue.prototype.clear = function() {
    this.array = [];
}

let queue = new Queue([1,2,3]);
console.log(queue);

queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
console.log(queue.size());
