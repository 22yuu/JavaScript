import {LinkedList} from "../연결리스트/20.연결 리스트 구현하기(6).mjs"

const HASH_SIZE = 37; 

function Element(key, value) {
    this.key = key;
    this.value = value;
}

function ChainingHashTable() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

ChainingHashTable.prototype.hashCode = function (key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
}

ChainingHashTable.prototype.clear = function() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

ChainingHashTable.prototype.size = function() {
    return this.length;
}

ChainingHashTable.prototype.getBuffer = function() {
    let array = [];
    for(let key in this.table) {
        if(this.table[key] !== undefined) {
            array.push(thi.table[key].value);
        }
    }

    return array;
}

ChainingHashTable.prototype.put = function(key, value) {
    let index = this.hashCode(key);
    console.log(`key: ${key} -> index: ${index}`);

    if(this.table[index] === undefined) {
        this.table[index] = new LinkedList();
    }

    this.table[index].append(new Element(key, value));
    this.length++;

    return true;
}

ChainingHashTable.prototype.getBuffer = function() {
    let array = [];

    for(let i = 0; i < this.table.length; i++) {
        if(this.table[i]) {
            let current = this.table[i].head;
            do{
                array.push(current.data);
                current = current.next;
            } while(current)
        }
    }
    return array;
}

ChainingHashTable.prototype.print = function() {
    for(let i = 0; i < this.table.length; i++) {
        if(this.table[i]) {
            let current = this.table[i].head;
            process.stdout.write(`#${i}`);
            do {
                process.stdout.write(` -> ${current.data.key}: ${current.data.value}`);
                current = current.next;
            } while(current)
            console.log("");
        }
    }
}

ChainingHashTable.prototype.get = function(key) {
    let index = this.hashCode(key);

    if(this.table[index] !== undefined && !this.table[index].isEmpty()) {
        let current = this.table[index].head;

        do {
            if(current.data.key === key) {
                return current.data.value;
            }
            current = current.next;
        } while(current);
    }

    return undefined;
}

ChainingHashTable.prototype.remove = function(key) {
    let index = this.hashCode(key);
    let element = undefined;

    if(this.table[index] !== undefined) {
        let current = this.table[index].head;
        console.log(`current : ${current.data.key}`);
        do {
            if(current.data.key === key) {
                element = current.data;
                this.table[index].remove(current.data);
                this.length--;
                if(this.table[index].isEmpty()) {
                    delete this.table[index];
                }
            }
            current = current.data;
        }while(current);
    }

    return element;
}

let cht = new ChainingHashTable();
cht.put("Ana", 172);
cht.put("Donnie", 183); // collision
cht.put("Sue", 163);
cht.put("Jamie", 168); // collision
cht.put("Paul", 190);
console.log("");
cht.print();

console.log(cht.remove("Ana"));
console.log("");
cht.print();

// console.log(cht.remove("Jamie"));
// console.log("");
cht.print();

console.log(cht);

// console.log(cht.get("Ana"));
// console.log(cht.get("Donnie"));
// console.log(cht.get("Kim"));

// console.log(cht);
// cht.print();
// console.log(cht.getBuffer());
