/**
 * 코로나 백신이 개발되어 네카라쿠배 회사는 전 직원들에게 백신 주사를 접종하기로 하였다. 접종의 혼란을
 * 줄이기 위하여, 부스 배정기(Hash 함수)를 사용하여 직원 이름 별로 접종할 부스를 사전에 예약 시켰으나,
 * 몇몇 직원이 오지 않아 남는 부스가 생겨나게 되었다. 코란 확산을 빠르게 막기 위해, 온 순서대로 부스 배정을 시키고,
 * ALice는 1번, Bob은 3번에 배정되었고 2번 부스가 비어 있는 상항에, 1번으로 배정받은 다음 대기자 Tom은 2번에 배정되어 백신 주사를맞게 된다. 
 * 구현은 템플릿 코드를 참고하며, 입력은 직원들 이름으로 된 배열이 주어지고, 직원 별 주사를 맞을 부스 번호를 기록해 반환한다.
 */

function Element(key, value) {
    this.key = key;
    this.value = value;
}

function HashTable(size) {
    this.size = size;
    this.table = new Array(size);
    this.length = 0;
}

HashTable.prototype.hashCode = function (key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % this.size;
}

HashTable.prototype.put = function (key) {
    let index = this.hashCode(key);
    let startIndex = index;

    do {
        if(this.table[index] === undefined) {
            this.table[index] = new Element(key, index + 1);
            this.length++;
            
            return true;
        }
        index = (index + 1) % this.size;
    } while(index !== startIndex);

    return false;
}

HashTable.prototype.get = function (key) {
    let index = this.hashCode(key);
    let startIndex = index;

    do {
        if(this.table[index]  !== undefined && this.table[index].key === key) {
            return this.table[index].value;
        }

        index = (index + 1) % this.size;
    } while(index !== startIndex)

    return undefined;
}

function answer(name) {
    let result = [];

    let ht = new HashTable(name.length);
    for(let i = 0; i < name.length; i++) {
        ht.put(name[i]);
    }

    for(let i = 0; i < name.length; i++) {
        result.push(ht.get(name[i]));
    }

    return result;
}

let input = [
    ["Mana", "Naomi", "Lelia", "Morris", "Madonna"],
    ["Oliver", "Mabel", "Nero", "Rei", "kara", "Jordan", "Nami"],
    ["Ruby", "Robin", "Jordan","Kori", "Rei", "Madonna", "Justin","Maya","Lakia","Kali"]
]

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1}`);
    console.log(answer(input[i]));
}