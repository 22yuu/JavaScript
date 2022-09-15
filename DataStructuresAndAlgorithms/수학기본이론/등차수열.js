
function answer(a, d, n) {
    let index = -1;

    // 등차수열

    // #1 for문을 이용
    // let num;
    // for(let i = 1;; i++) {
    //     num = a + d * (i - 1);

    //     if(num > n) break;

    //     if(num === n) {
    //         index = i;
    //     }
    // }

    // #2 수학적인 방법
    if((n-a) % d === 0) {
        index = (n-a) / d + 1;
    } 

    return index;

}

let input = [
    [1,2,7],
    [2,3,10],
    [3,5,23],
]

for(let i = 0; i < input.length; i++) {
    console.log(`#${i+1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}