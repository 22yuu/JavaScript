function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
}


function DoubleLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

// size(): 연결 리스트 내 노드 개수 확인
DoubleLinkedList.prototype.size = function () {
    return this.length;
}

// isEmpty(): 객체 내 노드 존재 여부 파악
DoubleLinkedList.prototype.isEmpty = function () {
    return this.length === 0;
}

// printNode(): 노드 정방향 출력
DoubleLinkedList.prototype.printNode = function () {
    process.stdout.write("head -> ");
    for(let node = this.head; node != null; node = node.next) {
        process.stdout.write(`${node.data} -> `);
    }
    console.log("null");
}

// printNodeInverse(); 노드 역방향 출력
DoubleLinkedList.prototype.printNodeInverse = function () {
        let temp = [];

        process.stdout.write("null <- ");
        for(let node = this.tail; node != null; node = node.prev) {
            temp.push(node.data);
        }

        for(let i = temp.length - 1; i >= 0; i--) {
            process.stdout.write(`${temp[i]} <- `);
        }
        console.log("tail");
}

// append(): 연결 리스트 가장 끝에 노드 추가
DoubleLinkedList.prototype.append = function(value) {
    let node = new Node(value);
    

    if(this.head === null) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    this.length++;
}

// insert(): position 위치에 노드 추가
DoubleLinkedList.prototype.insert = function (value, position = 0) {
    if( position < 0 || position > this.length) {
        return false;
    }

    let node = new Node(value),
        current = this.head,
        index = 0,
        prev;

    if( position === 0) {
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = current;
            current.prev = node;
            this.head = node;
        }
    } else if( position === this.length ) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
    } else {
        while( index++ < position) {
            prev = current;
            current = current.next;
        }

        node.next = current;
        prev.next = node;

        current.prev = node;
        node.prev = prev;
    }

    this.length++;

    return true;
}

DoubleLinkedList.prototype.remove = function (value) {
    let current = this.head,
        prev = current;

    while( current.data != value && current.next != null) {
        prev = current;
        current = current.next;
    }

    if( current.data != value) {
        return null;
    }

    if( current === this.head) {
        this.head = current.next;
        if(this.length === 1) this.tail = null;
        else this.head.prev = null;
    } else if(current === this.tail) {
        this.tail = current.prev;
        this.tail.next = null;
    } else {
        prev.next = current.next;
        current.next.prev = prev;
    }

    this.length--;

    return current.data;
}

/* Test code */
let dll = new DoubleLinkedList();
let node;
console.log(dll);

/*
node = new Node(123);
dll.head = node;
dll.tail = node;
dll.length++;
console.log(dll);

node = new Node(456);
dll.tail.next = node;
node.prev = dll.tail;
dll.tail = node;
dll.length++;
console.log(dll);
*/

// append
/* dll.append(1);
dll.append(10);
dll.append(100);

dll.printNode();
dll.printNodeInverse(); */

// insert
dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.insert(2, 1);
dll.insert(3, 3);
dll.printNode();
dll.printNodeInverse();

console.log(dll.remove(1000));
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove(1));
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove(2));
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove(100));
dll.printNode();
dll.printNodeInverse();