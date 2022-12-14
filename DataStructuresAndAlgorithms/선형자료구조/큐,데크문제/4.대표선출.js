/**
 * 네카라쿠배 마을에 대표를 선추해야 한다. 모두 자신이 대표가 되고 싶어하여, 아래 규칙을 통해 대표를 선출하기로 하였다
 * 규칙은 먼저 원탁에 둘러 앉아 시계 방향으로 1번부터 n번까지 번호를 부여한다. 그리고 주사위를 통해 굴려 나온 숫자  m의 사람을 제외하고,
 * 그 다음으로 나온 주사위 숫자 k만큼 이동해 가며 대표 후보에서 제외시킨다. 이렇게 순회하며 1명이 남을 때 까지 반복해 마을의 대표를 선출하기로 하였다. 
 * n, m, k가 주어졌을 때 대표 후보에서 제외되는 번호를 출력해주는 프로그램을 제작하시오. 
 * 입력은 n, m, k의 자연수가 주어지며, 대표 후보에서 제외되는 번호를 순차적으로 배열로 반환한다. 
 */

function CircularQueue(size) {
    this.array = new Array(size);
    this.size = this.array.length;
    this.length = 0;
    this.head = 0;
    this.tail = 0
}

CircularQueue.prototype.enqueue = function(item) {
    // this.array[this.tail] = item;
    // this.tail = (this.tail + 1) % this.size;
    this.array[this.tail++ % this.size] = item;
    this.length++;

    return true;
}

CircularQueue.prototype.dequeue = function() {
    this.length--;
    return this.array[this.head++ % this.size];
}


function answer(n, m, k) {
    let result = [];
    
    // 1. 원탁에 후보 번호 세팅 (enqueue)
    let cq = new CircularQueue(n);
    for(let i = 1; i <= n; i++) {
        cq.enqueue(i);
    }

    // 2. 첫번째 노드 위치로 설정
    cq.tail = cq.head = (n + m - 1) % n; // index

    // 3. k만큼 움직이면서 대표 후보를 제거
    // 제거된 번호는 result에 추가
    let count;
    result.push(cq.dequeue());

    while(cq.length != 0) {
        count = k - 1;
        while(count--) {
            cq.enqueue(cq.dequeue());
        }
        result.push(cq.dequeue());
    }


    return result;    
}

 let input = [
    [8,2,3],
    [10,2,3],
    [20,5,7],
]

for(let i = 0 ; i  < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1], input[i][2]));
}

