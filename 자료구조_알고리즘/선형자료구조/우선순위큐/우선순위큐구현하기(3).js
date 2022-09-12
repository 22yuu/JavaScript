// Element(): 데이터와 우선순위를 젖아하기 위한 생성자 함수
function Element(data, priority) {
    this.data = data;
    this.priority = priority;
}

// PriorityQueue(): Element 관리를 위한 생성자 함수
function PriorityQueue() {
    this.array = [];
}

// getBuffer(): 객체 내 데이터 셋 반환
PriorityQueue.prototype.getBuffer = function() {
    return this.array.map((element) => element.data);
}

// isEmpty(): 객체 내 데이터 존재 여부 파악
PriorityQueue.prototype.isEmpty = function() {
    return this.array.length === 0;
}

// enqueue(): 데이터 추가
PriorityQueue.prototype.enqueue = function (data, priority) {
    let element = new Element(data, priority);
    let added = false;

    // for문을 돌면서 새로 추가할 데이터의 우선순위가 기존 array 안에 들어 있는 우선순위보다 낮을 때(우선순위 낮을수록 먼저 처리하는 것임)
    // splice 메서드를 이용해 배열에 데이터를 추가해준 후 added flag 변수를 이용해 데이터가 추가되었다는 것을 알려준다.
    for(let i = 0; i < this.array.length; i++) {
        if(element.priority < this.array[i].priority) {
            this.array.splice(i, 0, element); // i번째 위치에 0개를 삭제하고 element를 추가해라
            added = true;
            break;
        }
    }

    //  for문을 통해 큐 안의 모든 데이터들을 탐색하였지만 새로 추가할 데이터의 우선순위가 기존 데이터들보다 높은 경우 
    // 큐의 끝에 추가해준다. 
    if(!added) {
        this.array.push(element);
    }
}

PriorityQueue.prototype.dequeue = function() {
    return this.array.shift();
}

// front(): 가장 첫 데이터 반환
PriorityQueue.prototype.front = function() {
    return this.array.length === 0 ? undefined : this.array[0].data;
}

// size(): 큐 내 데이터 개수 반환
PriorityQueue.prototype.size = function() {
    return this.array.length;
}

// clear(): 큐 초기화
PriorityQueue.prototype.clear = function() {
    this.array = [];
}

/* Test Code */
console.log(Object.getOwnPropertyDescriptors(Element.prototype));
console.log(Object.getOwnPropertyDescriptors(PriorityQueue.prototype));


let pq = new PriorityQueue();

pq.enqueue("Alice", 1);
pq.enqueue("Bob", 2);
pq.enqueue("Tom", 1);
pq.enqueue("John", 3);
console.log(pq.getBuffer());

console.log(pq.dequeue());
console.log(pq.dequeue());

console.log(pq.front());
console.log(pq.size());
pq.enqueue("Tom", 1);
console.log(pq);