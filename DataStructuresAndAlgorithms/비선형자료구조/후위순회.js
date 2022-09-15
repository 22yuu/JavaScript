/**
 * 컴퓨터공학과에 들어간 사촌 동생이 후위 순회를 궁금해한다. 
 * 트리가 주어졌을 때, 후위 순회하며 방문했던 노드를 산출해주는 프로그램을 작성하시오. 
 * 입력은 노드가 추가되는 순번대로 명시된 문자열이 주어지며, 트리를 마늗ㄹ어 갈때 작은 값은 왼쪽으로 큰 값은
 * 오른쪽으로 붙여가며 만든다. 왼쪽 - 오른쪽 - 루트 순으로 후위 순회하며 방문한 노드를 배열에 저장하고 그 결과를 반환한다.
 */

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinaryTree() {
    this.root = null;
}

BinaryTree.prototype._insertNode = function(node, value) {
    if(node === null) {
        node = new Node(value)
    } else if (value < node.value) {
        node.left = this._insertNode(node.left, value);
    } else if (value > node.value) {
        node.right = this._insertNode(node.right, value);
    }
    return node;
}

BinaryTree.prototype.insert = function(value) {
    this.root = this._insertNode(this.root, value);
}

BinaryTree.prototype.postOrderTraverse = function(node, array) {
    if(node === null) {
        return;
    }

    this.postOrderTraverse(node.left, array);
    this.postOrderTraverse(node.right, array);
    array.push(node.value);
}

function answer(str) {
    let result = [];

    let tree = new BinaryTree();
    for(let i = 0; i < str.length; i++) {
        tree.insert(str[i]);
    }

    // console.log(tree);

    tree.postOrderTraverse(tree.root, result);
    return result;
}

let input = [
    "ABC",
    "FBADCEGIH",
    "CBAEDFG"
]

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`${i + 1}`);
    console.log(answer(input[i]));
}