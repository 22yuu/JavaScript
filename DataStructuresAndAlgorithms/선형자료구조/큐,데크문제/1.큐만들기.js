/**
 * 자연수를 저장하는 큐를 만들고자 한다. 입력으로 주어지는 큐 명령어를 처리하는 프로그램을 작성하시오
 * 명렁의 종류는 총 6가지며 아래와  같으며, 명령에 따라 반환된 값을 result 배열에 넣도록 한다
 * enqueue X: 자연수 X를 큐 뒤쪽에 넣는다
 * dequeue: 큐 앞쪽에 있는 값을 제거하고 그 값을 반환한ㄴ다 만약 값이 없다면 -1를 반환한다
 * empty: 큐가 비어 있다면 1, 아니면 0을 반환한다
 * size: 큐에 들어 있는 자연수 개수를 반환한다
 * front: 큐 앞쪽에 값이 있다면 해당 값을, 없다면 -1을 반환한다
 * back: 큐 뒤쪽에 값이 있다면 해당 값을, 없다면 -1을 반환한다
 */

function Que() {
    this.array = [];
}

Que.prototype.isEmpty = function() {
    return this.array.length === 0 ? 1 : 0;
}

Que.prototype.size = function() {
    return this.array.length;
}

Que.prototype.enqueue = function(element) {
    this.array.push(element);
}

Que.prototype.dequeue = function() {
    // if(this.isEmpty()) return -1;
    // return this.array.shift();

    let ret = this.array.shift();
    return ret === undefined ? -1 : ret;
}

Que.prototype.front = function() {
    return this.array.length === 0 ? -1 : this.array[0];
}

Que.prototype.back = function() {
    return this.array.length === 0 ? -1 : this.array[this.array.length - 1];
}


function answer(cmds) {
    let result = [];
    let que = new Que();

    for(let i = 0; i < cmds.length; i++) {
        let cmd = cmds[i].split(" ")[0];
        // console.log(cmd);

        switch(cmd) {
            case "enqueue":
                que.enqueue(Number(cmds[i].split(" ")[1]));
                break;
            case "dequeue":
                result.push(que.dequeue());
                break;
            case "size":
                result.push(que.size());
                break;
            case "front":
                result.push(que.front());
                break;
            case "back":
                result.push(que.back());
                break;
            case "empty":
                result.push(que.isEmpty());
                break;
        }
    }

    return result;
}

let input = [
    ["enqueue 1", "enqueue 2", "dequeue", "dequeue", "dequeue"],
    ["enqueue 3", "enqueue 4", "enqueue 6", "front", "back", "dequeue", "size", "empty"],
    ["enqueue 7", "enqueue 8", "front", "back", "size", "empty", "dequeue", "dequeue", "dequeue", "size", "empty", "dequeue", "enqueue 9", "empty", "front"],
]

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1}`);
    console.log(answer(input[i]));
}
