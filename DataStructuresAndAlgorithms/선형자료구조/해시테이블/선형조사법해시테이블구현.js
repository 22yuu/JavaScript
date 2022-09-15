const HASH_SIZE = 5; // 충돌을 위해 변경
 
// Element(): key, value 저장을 위한ㅅ ㅐㅇ성자
function Element (key, value) {
    this.key = key;
    this.value = value;
}

function LinearHashTable() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

// hashCode(): 해시 함수
LinearHashTable.prototype.hashcode = function (key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
}

// clear(): 초기화
LinearHashTable.prototype.clear = function() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

// size()
LinearHashTable.prototype.size = function() {
    return this.length;
}

// getBuffer(): 데이터 셋 반환
LinearHashTable.prototype.getBuffer = function() {
    let array = [];
    for(let key in this.table) {
        if(this.table[key]) {
            array.push(this.table[key].value);
        }
    }
    return array;
}

// put(): 데이터 추가
LinearHashTable.prototype.put = function(key, value) {
    let index = this.hashcode(key);
    let startIndex = index;
    
    do {
        if(this.table[index] === undefined) {
            console.log(`key : ${key} -> index: ${index}`);
            this.table[index] = new Element(key, value);
            this.length++;
            return true;
        }
        
        index = (index + 1) % HASH_SIZE;
    } while(index !== startIndex);

    return false;
}

// get(): 데이터 조회
LinearHashTable.prototype.get = function(key) {
    
    /* 
    !@ 아래와 같이 구현하면 안되는 이유 -> key값이 동일할 경우 원하는 value를 얻을 수 없음
    let index = this.hashcode(key);
    if(this.table[index] !== undefined) {
        return this.table[index].value;
    }
    return index;
     */

    let index = this.hashcode(key);
    let startIndex = index;

    do {
        if(this.table[index] !== undefined && this.table[index].key === key) {
            // 동일한 key 값으로 다른 위치에 저장되었을 수도 있기 때문에
            // index값과 key값 함께 비교해가면서 동일한 key 값일 때 데이터를 반환
            return this.table[index].value;
        }

        index = (index + 1) % HASH_SIZE;
    } while(index !== startIndex);

    return undefined;
}

// remove(): 데이터 삭제
LinearHashTable.prototype.remove = function (key) {
    let index = this.hashcode(key);
    let startIndex = index;

    do {
        if(this.table[index] !== undefined && this.table[index].key === key) {
            // 삭제 또한 get과 마찬가지로 index 값과 key 값을 함께 비교하며 동일한 key 값일 때 삭제
            let element = this.table[index];
            delete this.table[index];
            return element;
        }

        index = (index + 1) % HASH_SIZE;

    } while(index !== startIndex);
}

// print()
LinearHashTable.prototype.print = function() {
    
    for(let i = 0; i < this.table.length; i++) {
        if(this.table[i]) {
            console.log(i + " -> " + this.table[i].key + " : " + this.table[i].value);
        }
    }
}


let lht = new LinearHashTable();

lht.put("Ana", 172);
lht.put("John", 179);
lht.put("Donnie", 183);
lht.put("Mindy", 190);
console.log(lht.put("Paul", 168)); // collision -> 빈 공간이 있어 true 반환
console.log(lht.put("Sue", 163)); // collision -> sue는 table이 꽉차서 더이상 추가를 못함 그래서 false를 반환
console.log(lht);
console.log("");

console.log(lht.get("Ana"));
console.log(lht.get("Paul"));
console.log(lht.get("Kim"));

console.log(lht.remove("Ana"));
console.log(lht.get("Paul"));
console.log(lht.remove("Paul"));
console.log(lht.get("Paul"));

console.log(lht.getBuffer());
/* lht.print();
console.log(lht.getBuffer());
console.log(lht);

lht.clear();
console.log(lht); */