let input = [1,2,3,4]; // 4C2
let output = [];
let count = 0;

function combination(arr, data, start, idx, r) {
    if( start === r) {
        count++;
        console.log(data);
        return;
    }

    for(let i = idx; arr.length - i >= r - start; i++) {
        data[start] = arr[i];
        combination(arr, data, start + 1, i + 1, r);
    }
}

combination(input, output, 0, 0, 3);
console.log(count);
