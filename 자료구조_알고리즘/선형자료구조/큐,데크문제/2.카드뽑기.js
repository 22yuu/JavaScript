/**
 * 친구와 카드 게임을 하려고 한다. 카드는 총 N장 있으며, 1부터 N까지 번호가 차례대로 붙어 있다
 * 카드의 순서는 1번 카드가 가장 위에 있고 N번 카드가 가장 아래인 상태로 놓여 있다
 * 이때 맨 위에 있는 한 장을 뺴서 나누고, 그 다음 맨 위에 있는 한 장을 아래로 집어 넣으면서, 모든 카드를 분배할 때까지 카드 한 장씩 빼고 넣는 작업을
 * 반복한다. 이러한 규칙으로 분배된 카드의 순서를 알려주는 프로그램을 작성하시오.
 * 입력 값은 자연수가 주어지며, 규칙에 따라 분배되는 카드의 순서를 기록해 배열 형태로 반환하시오
 */

function Queue() {
    this.array = [];
}

Queue.prototype.enqueue = function(item) {
    this.array.push(item);
}

Queue.prototype.pushFront = function(item) {
    this.array.unshift(item);
}

Queue.prototype.dequeue = function() {
    return this.array.shift();
}

Queue.prototype.size = function() {
    return this.array.length;
}



function answer(n) {
    let result = [];
    let que = new Queue();

    for(let i = 1; i <= n; i++) que.enqueue(i);
    // console.log(que);

    while(true) {
        // 가장 위에 있는 카드를 나누어 준다.
        result.push(que.dequeue());
        // console.log(que.dequeue());
        // console.log(que.size());

        // 다음 카드를 맨 아래로 보낸다.
        let card = que.dequeue();
        if(card === undefined) break;
        que.enqueue(card);
    }


    return result;
}

let input = [
    [4],[7],[10]
]

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1}`);
    console.log(answer(input[i]));
}