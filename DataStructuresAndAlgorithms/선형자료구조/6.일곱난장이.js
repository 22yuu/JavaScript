function answer(dwarf) {

    let sum = 0;

    for(let value of dwarf) sum += value;

    let find_sum_value = sum - 100;

    // console.log(find_sum_value);
    for(let value of dwarf) {
        let diff = Math.abs(find_sum_value - value);
        let value2 = dwarf.find((item) => item === diff);

        if(value2 !== undefined) {
            // console.log(`value : ${value}, diff : ${diff}`);
            // console.log("filtered array : " + dwarf.filter((item) => item != diff));
            dwarf = dwarf.filter((item) => item != diff);
            dwarf = dwarf.filter((item) => item != value);
            break;
        }
    }

    // console.log(dwarf);

    return dwarf;
}

function answer2(dwarf) {
    let result = []

    // 1. 9명(배열 총 합) = 7명(100) + 2명 (faker 합)
    // 9명 - 7명 = 2명에 대한 합 숫자
    let sum = 0;
    for(let i = 0; i < dwarf.length; i++) {
        sum += dwarf[i];
    }
    sum -= 100; // -> faker 2명에 대한 배지값

    // 2. for 두 요소의 합이 faker 2명에 대한 합 숫자와 같은지 비교 -> i, j
    let faker = []; // faker들의 index 값을 저장
    for(let i = 0; i < dwarf.length; i++) {
        for(let j = i+1; j < dwarf.length; j++) {
            if(sum === dwarf[i] + dwarf[j]) {
                faker[0] = i;
                faker[1] = j;
                break;
            }
        }

        if(faker.length != 0) break;
    }
    // console.log(faker);

    // 3. faker 2명을 제외하고 result에 넣어준다.
    let count = 0;

    for(let i = 0; i < dwarf.length; i++) {
        if(faker[0] != i && faker[1] != i) {
            result[count++] = dwarf[i];
        }
    }
    return result;
}

let input = [
    [1,5,6,7,10,12,19,29,33],
    [25,23,11,2,18,3,28,6,37],
    [3,37,5,36,6,22,19,2,28],
];

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i+1}`);
    console.log(answer2(input[i]));
}