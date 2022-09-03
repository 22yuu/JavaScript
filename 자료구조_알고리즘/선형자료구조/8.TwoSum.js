function answer(nums, target) {
    // let result = [];

    for(let i = 0; i < nums.length; i++) {
        
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }

    return [];
}

function answer2(nums, target) {
    let map = {}; // key, value

    for(let i = 0; i < nums.length; i++) {
        if(map[target - nums[i]] != undefined) {
            console.log(map);
            return [map[target - nums[i]], i];
        }

        map[nums[i]] = i;
    }

    console.log(map);

    return [];
}



let input = [

    [[2,7,11,15], 9],

    [[3,2,4], 6],

    [[3,3],6],
];

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i+1}`);
    console.log(answer2(input[i][0], input[i][1]));
}