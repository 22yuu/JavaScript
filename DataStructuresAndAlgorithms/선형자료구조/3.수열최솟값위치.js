function answer(nums) {
    let result = [];
    let min = Number.MAX_SAFE_INTEGER
    
    for(let num of nums) {
        if(min > num) min = num;
    }

    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === min) {
            // result.push(i);
            result[index++] = i;
        }
    }
    return result;
}

let input = [
    // TC: 1
    [5, 2, 10, 2],

    // TC: 2
    [4, 5, 7, 4, 8],

    // TC: 3
    [12, 11, 11, 16, 11, 12],
];

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1}`);
    console.log(answer(input[i]));
}