// Node(): data와 point를 가지고 있는 객체
function Node(data) {
    this.data = data;
    this.next = null;
}

// LinkedList(): head와 length를 가지고 있는 객체
function CircularLinkedList() {
    this.head = null;
    this.length = 0;
}

// size(): 연결 리스트 내 노드 개수 확인 Prototype을 이용해 캡슐화
CircularLinkedList.prototype.size = function() {
    return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
CircularLinkedList.prototype.isEmpty = function () {
    return this.length === 0; // return true or false
}


/* Test Code */
let cll = new CircularLinkedList();
let node;
// console.log(cll);

node = new Node(123);
cll.head = node;
node.next = cll.head;
cll.length++;
// console.log(cll);

node = new Node(456);
console.log(cll.head.next);
node.next = cll.head;
cll.head.next = node;
cll.length++;
console.log('-------------------');
console.log(cll);