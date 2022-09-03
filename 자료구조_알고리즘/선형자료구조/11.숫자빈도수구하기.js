function freq(num, nums) {
    

    while(num > 0) {
        nums[num%10]++;
        num = Math.floor(num / 10);
    }

    return;
}

function answer(num1, num2) {
    let nums = [0,0,0,0,0,0,0,0,0,0];

    for(let i = num1; i <= num2; i++) freq(i, nums);


    return nums;
}

let input = [
    [129, 137],
    [1412, 1918],
    [4159, 9182]
];

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i+1}`);
    console.log(answer(input[i][0], input[i][1]));
}