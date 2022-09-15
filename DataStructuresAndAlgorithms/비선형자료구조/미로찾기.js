

/**
 * 친구가 제주도 미로 공원에서 들어갔는데 1시간째 못 빠져 나오고 있다. 
 * 친구를 도와 최단거리로 미로를 빠져 나오는 경로를 구하는 프로그램을 작성하시오. 
 * 미로 공원은 정사각형 형태이며, 길 0과 벽 1로 이루어진 X축 문자열 정보가 Y축 개수만큼 주어진다.
 * 정사각형으로 이루어진 2차원 미로 지도의 입구는 왼쪽 하단이고, 출구는 오른쪽 상단이다. 
 * 최단 경로로 입구에서 출구를 나갈 때 거쳐야 하는 길의 개수를 반환하시오. 
 * 만약 출구로 갈 수 있는 길이 없다면 -1을 반환한다. 
 * 
 * bfs
 */

function Node(x,y,c) {
    this.x = x;
    this.y = y;
    this.c = c;
}

function Queue() {
    this.array = [];
}

Queue.prototype.enqueue = function(element) {
    this.array.push(element);
}

Queue.prototype.dequeue = function() {
    return this.array.shift();
}

Queue.prototype.isEmpty = function() {
    return this.array.length === 0;
}

function answer(input) {
    let result = -1;
    let size = input.length;
    let dir = [[1,0], [0,1], [-1,0], [0, -1]];
    let map = [];
    for(let i = 0; i < size; i++) {
        map[i] = [];
        for(let j = 0; j < size; j++) {
            map[i][j] = Number(input[i][j]);
        }
    }
    let s = [0, size - 1];
    let e = [size - 1, 0];
    let q = new Queue();

    q.enqueue(new Node(s[0], s[1], 1));
    while(!q.isEmpty()) {
        let v = q.dequeue();
        if(v.x < 0 || v.y < 0 || v.x >= size || v.y >= size) continue;
        if(map[v.y][v.x]) continue;
        if(v.x === e[0] && v.y === e[1]) {
            result = v.c;
            break;
        }

        map[v.y][v.x] = 1;
        for(let i = 0; i < dir.length; i++) {
            q.enqueue(new Node(v.x + dir[i][0], v.y + dir[i][1], v.c + 1));
        }
    }
    return result;
}

let input = [
    ["00110",
     "00010",
     "00110",
     "00000",
     "01011"],
    ["00110", "00010", "00110", "00010", "01011"],
    ["1111111100", 
     "1111111101",
     "1111111101",
     "1000111101",
     "1010111101",
     "1010011101",
     "1011011101",
     "1011011101",
     "1011000001",
     "0011111111",]
]

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i+1} `);
    console.log(answer(input[i]));
}