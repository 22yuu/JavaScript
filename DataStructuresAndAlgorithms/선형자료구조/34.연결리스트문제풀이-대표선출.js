/**
 * 네카라쿠배 마을에 대표를 선추해야 한다. 모두 자신이 대표가 되고 싶어하여, 아래 규칙을 통해 대표를 선출하기로 하였다
 * 규칙은 먼저 원탁에 둘러 앉아 시계 방향으로 1번부터 n번까지 번호를 부여한다. 그리고 주사위를 통해 굴려 나온 숫자  m의 사람을 제외하고,
 * 그 다음으로 나온 주사위 숫자 k만큼 이동해 가며 대표 후보에서 제외시킨다. 이렇게 순회하며 1명이 남을 때 까지 반복해 마을의 대표를 선출하기로 하였다. 
 * n, m, k가 주어졌을 때 대표 후보에서 제외되는 번호를 출력해주는 프로그램을 제작하시오. 
 * 입력은 n, m, k의 자연수가 주어지며, 대표 후보에서 제외되는 번호를 순차적으로 배열로 반환한다. 
 */


/** 요세푸스 문제 */
function Node(data) {
    this.data = data;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

function answer(n, m, k) {
    let result = [];
    let ll = new LinkedList();
    let current, prev;

    // 1~ n까지 원형 연길리스트 연결
    for(let i = 1; i <= n; i++) {
        
        current = new Node(i);

        if(i === 1) {
            ll.head = current;
        } else {
            prev.next = current;
        }

        prev = current;
    }
    current.next = ll.head;

    // 2. Start node 위치 설정
    current = ll.head;
    while(--m) {
       prev = current;
       current = prev.next; 
    }

    // 3. 후보자들 중 k만큼 움직이면서 제거 -> 단, 혼자 남을 때까지
    let count;
    while(current.next != current) {
        // current의 next가 자기 자신일 때 -> 혼자 남았다
        result.push(current.data);
        prev.next = current.next;

        count = k;

        while(count--) {
            prev = current;
            current = current.next;
        }
    }

    // 4. 혼자 남은 후보 번호를 result추가
    result.push(current.data);

    return result;
}

let input = [

    [8,2,3],
    [10,2,3],
    [20,5,7],
]

LinkedList.prototype.printNode = function () {

    for(let node = this.head.next; node.next != this.head; node = node.next) {
        process.stdout.write(`${node.data} -> `);
    }
}


for(let i = 0 ; i  < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1], input[i][2]));
}

