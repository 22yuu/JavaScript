/**
 * 순열 (Permutation)
 * 
 * 서로 다른 n개의 원소 중에서 r를 중복 없이 골라 순서에 상관있게 나열하는 경우의 수
 * 
 */

let input = ["a", "b", "c"];
let count = 0;

const permutation = (arr, s, r) => {
    
    if(s === r) {
        count++;
        console.log(arr.join(" "));
        return;
    }

    for(let i = s; i < arr.length; i++) {
        [arr[s], arr[i]] = [arr[i], arr[s]];
        permutation(arr, s + 1, r);
        [arr[s], arr[i]] = [arr[i], arr[s]];
    }
}

permutation(input, 0,2);
console.log(count);

