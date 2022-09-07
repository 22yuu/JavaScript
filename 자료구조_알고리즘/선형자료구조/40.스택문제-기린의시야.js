/**
 * 기린이 앞쪽만 볼 수 있는 경우, 다른 기린을 몇 마리 볼 수 있는지 총합을 구하는 프로그램을 작성하시오
 * 기린은 자신보다 작거나 같은 기린만 볼 수 있으며, 자신봗 큰 기린이 나올 경우 앞 기린들이 가려서 볼 수 가 없다
 * 입력은 기린 별 키 값이 들어오며, 다른 기린을 볼 수 있는 총합을 구해 반환한다
 * 예를 들어, 5 2 4 2 6 1 순의 기린 키가 입력으로 들어오면 1번 기린은 2, 3, 4 기린을 볼 수 있어 3마리,
 * 2번은 볼 수 있는 기린이 없고, 3번은 1마리, 4번은 0마리, 5번은 1마리, 마지막 기른은 앞의 기린이 없으므로 0마리로, 총 답은 5마리 기린이다
 */

 if(!Array.prototype.peek) {
    // undefined에서 ! (not)이 붙으면 true가 됨!!!
    Array.prototype.peek = function() {
        return this[this.length - 1]; // this는 array를 가리킴
    }
}

if(!Array.prototype.isEmpty) {
    Array.prototype.isEmpty = function() {
        return this.length === 0;
    }
}

function answer(heights) {
    let result = 0;


    for(let i = 0; i < heights.length; i++) {
        for(let j = i + 1; j < heights.length; j++) {
            if(heights[i] >= heights[j]) {
                result++;
            } else {
                break;
            }
        }
    }

    return result;
}

function answer2(heights) {
    let result = 0;

    let stack = [];
    heights.push(Number.MAX_SAFE_INTEGER);
    for(let i = 0; i < heights.length; i++) {
        while(!stack.isEmpty() && stack.peek()['h'] < heights[i]) {
            // 높이 계산
            result += i - stack.pop()['i'] - 1;
        }
        stack.push({ h: heights[i], i: i});
    }

    return result;    
}

let input = [
    [10, 3, 7, 4, 12, 2],
    [7, 4, 12, 1, 13, 11, 12, 6],
    [20, 1, 19, 18, 15, 4, 6, 8, 3, 3],
]

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer2(input[i]));
}

