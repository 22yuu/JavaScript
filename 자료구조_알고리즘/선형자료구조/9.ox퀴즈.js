function answer(nums) {
    let score = 0;
    let tmp = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 1) {
            score += ++tmp
        } else {
            tmp = 0;
        }
    }
    return score;
}

let input = [
    [1,0,1,1,1,0,1,1,0,0],
    [1,1,0,1,1,0,1,1,1,1],
    [1,1,1,1,1,0,0,1,1,0],
];

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i+1}`);
    console.log(answer(input[i]));
}