/**
 * 카드게임을 하기 위해 -10~10 사이의 숫자 카드를 N장 뽑았다. 
 * 이 때 M개 수를 갖는 숫자 카드가 몇 개 있는지 계산해주는 프로그램을 작성하시오. 
 * 숫자 카드 범위는 -10 <= 카드 <= 10 이며, N과 M의 범위는 3 <= N, M <= 20이다.
 * 입력은 숫자 카드 범위를 만족하는 N과 M 배열이 순차적으로 들어오며, M 숫자 카드를 몇 개 갖고 있는지를
 * 순차적으로 배열에 기록하여 반환한다
 */

const HASH_SIZE = 21;

function HashTable() {
    this.table = new Array(HASH_SIZE);
}

HashTable.prototype.hashCode = function (key) {
    return (key + 10) % HASH_SIZE;
}

HashTable.prototype.put = function (key) {
    let index = this.hashCode(key);
    if(this.table[index] === undefined) {
        this.table[index] = 0;
    }
    this.table[index]++;
}

HashTable.prototype.get = function (key) {
    let index = this.hashCode(key);
    return this.table[index] === undefined ? 0 : this.table[index];
}


function answer(N, M) {
    let result = [];
    let ht = new HashTable();

    for(let i = 0; i < N.length; i++) ht.put(N[i]);

    for(let key of M) result.push(ht.get(key));

    return result;
}

let input = [
    [[-6, -1, 6, 1, 1],[-2, 1, 3]],
    [[7,4,3,10,10,10,-10,-10,7,3],[10,9,-5,4,6,-10]],
    [[5,-3,-7,10,-3,4,8,4,-3,3,8,-2,-9,-8,-1], [4,5,1,10,-2,-3,3,-8]],
]

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1}`);
    console.log(answer(input[i][0], input[i][1]));
}