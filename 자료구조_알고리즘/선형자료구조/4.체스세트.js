const CHESS_SET = [1,1,2,2,2,8];

function answer(chess) {
    let result = [];
    
    for(let i = 0; i < chess.length; i++) {
        let value = CHESS_SET[i] - chess[i];

        result[i] = value;
    }
    return result;
}

let input = [
    [0, 1, 2, 2, 2, 7],

    [2, 1, 2, 1, 2, 1],

    [0, 1, 1, 5, 3, 6],
];

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i+1}`);
    console.log(answer(input[i]));
}