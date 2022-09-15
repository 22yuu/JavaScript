function answer(height) {
    let str = "\n";




    for(let i = 0; i < height; i++) {
        
        // 1. 공백 처리 " "
        for(let j = 0; j < height - i - 1; j++ ) {
            str += " ";
        }

        // 2. * 처리
        for(let j = 0; j < i * 2 + 1; j++) {
            str += "*";
        }

        // 3. 개행문자 추가
        str += "\n";

    }
    return str;
}

let input = [
    3,
    5,
    7,
];

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i+1}`);
    console.log(answer(input[i]));
}