function answer(a,b,c) {
    let number = 0;

    // sort

    num = [a,b,c];

    num.sort((x,y) => x - y);

    min = Math.min(num[1] - num[0], num[2] - num[1]);

    let diff1 = num[1] - num[0];
    let diff2 = num[2] - num[1];

    if(diff1 < diff2) {
        number = num[1] + diff1;
    } else {
        number = num[0] + diff2;
    }

    return number;
}

let input = [
    [1,7,10],
    [3,8,18],
    [2,5,11],
]

for(let i = 0; i < input.length; i++) {
    console.log(`#${i+1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}