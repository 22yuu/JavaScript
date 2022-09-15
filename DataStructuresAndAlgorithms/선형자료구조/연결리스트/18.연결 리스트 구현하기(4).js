// Node(): data와 point를 가지고 있는 객체
function Node(data) {
    this.data = data;
    this.next = null;
}

// LinkedList(): head와 length를 가지고 있는 객체
function LinkedList() {
    this.head = null;
    this.length = 0;
}

// size(): 연결 리스트 내 노드 개수 확인 Prototype을 이용해 캡슐화
LinkedList.prototype.size = function() {
    return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function () {
    return this.length === 0; // return true or false
}

// printNode(): 노드 출력
LinkedList.prototype.printNode = function () {
    for(let node = this.head; node != null; node = node.next) {
        process.stdout.write(`${node.data} -> `);
    }

    console.log("null");
}

// append(); 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function(value) {
    let node = new Node(value), current = this.head;

    if(current === null) {
        // 리스트가 비어있을 경우 현재 노드를 첫 번째 노드로 지정
        this.head = node;
    } else {
        while(current.next != null) {
            current = current.next
        }
        current.next = node;
    }

    this.length++;
};

// insert(): positon 위치에 노드 추가
LinkedList.prototype.insert = function(value, position = 0) {
    if(position < 0 || position > this.length) {
        return false;
    }

    let node = new Node(value),
        current = this.head,
        index = 0,
        prev; // 이전 노드를 저장할 변수

    if(position === 0) {
        node.next = current;
        this.head = node;
    } else {
        while(index++ < position) {
            prev = current;
            current = current.next;
        }

        node.next = current;
        prev.next = node;
    }

    this.length++;

    return true;

}

// remove(): value 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function (value) {
    let current = this.head,
        prev = current;

    while(current.data != value && current.next != null) {
        prev = current;
        current = current.next;
    }

    // while문이 끝났다 -> 모든 노드 탐색 완료를 했다.
    if(current.data != value) {
        // 모든 노드를 탐색하였지만 current의 data값이 value와 맞지 않다 -> 삭제할 데이터가 없다! null을 리턴
        return null;
    }

    // 여기까지 왔다는 것은 데이터가 있다는 것!
    if(current === this.head) {
        // 현재 current가 가르키는 데이터 즉 삭제할 데이터의 위치가 head이면 current의 next를 head로 지정
        this.head = current.next;
    } else {
        // prev의 next를 current의 next로 이어주면서 current를 단절시킴! -> 가비지 컬렉터에서 안쓰는 데이터는 자동으로 지워줌으로 따로 delete 코드가 없다.
        prev.next = current.next;
    }

    this.length--;

    return current.data;
}

/* Test code */
let ll = new LinkedList();
console.log(ll);

/* append() 메서드 구현 전 노드 추가
ll.head = new Node(123);
ll.length++;
console.log(ll);

ll.head.next = new Node(456);
ll.length++;
console.log(ll);
*/

// append() 메서드 구현 후 노드 추가
ll.insert(1);
ll.insert(10);
ll.insert(100);

ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();

console.log(ll.remove(1000));
ll.printNode();
console.log(ll.remove(1));
ll.printNode();
console.log(ll.remove(2));
ll.printNode();
console.log(ll.remove(100));
ll.printNode();

console.log(ll.size());