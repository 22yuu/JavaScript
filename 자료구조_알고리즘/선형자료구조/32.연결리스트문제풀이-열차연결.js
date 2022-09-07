/**
 * 새로운 지하철 노선이 신설되어, 이를 위한 열차가 새로 반입되었다. 하지만 이 열차들은 서로 연결되어 있지 않아 현재 운행이 어려운 상태이다.
 * 열차 운행을 위해 열차 찻간을 이어주는 프로그램을 작성하시오.
 * 열차 별로 고유의 식별번호가 있어, 이를 기준으로 반입된 순서대로 열차 찻간을 이어주도록 한다.
 * 입력은 배열 형태로 열차 식별번호가 주어지며, 열차 찻간을 이어주어 Linked List 형태로 반환한다.
 * 열차 연결 및 반환을 위해 사용해야 할 Train 객체와 Linked List 객체는 템플릿 코드를 참고한다.
 */

function Train(number) {
    this.number = number;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

function answer(nums) {
    let ll = new LinkedList();
    
    // 1. Train 객체를 nums 수만큼 만들고, next를 이용해서 열차간 연결
    // 연결 작업: 이전 Train 객체, next = 현재 Train 객체

    // 2. 가장 첫번째 Train 객체는 this.head로 연결
    let current, prev;

    for(let i = 0; i < nums.length; i++) {
        current = new Train(nums[i]);

        if( i === 0) {
            ll.head = current;
        } else {
            prev.next = current;
        }

        prev = current;
    }


    return ll;
}

let input = [
    [4,7,1,10,6],
    [3,10,6,9,11,3,4],
    [5,8,7,3,4,1,2,7,10,7],
];

LinkedList.prototype.printNode = function () {
    for(let node = this.head; node != null; node = node.next) {
        process.stdout.write(`${node.number} -> `);
    }
    console.log("null");
}

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i+1}`);
    answer(input[i]).printNode();
}