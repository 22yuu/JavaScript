let swap = function(arr, idx_1, idx_2) {
    let tmp = arr[idx_1];
    arr[idx_1] = arr[idx_2];
    arr[idx_2] = tmp;
};

let bubbleSort_1 = function(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
}

let bubbleSort_2 = function(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            // i를 빼준 이유는 이미 정렬된 데이터들을 스킵하기 위함
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j +1);
            }
        }
    }
}


let bubbleSort_3 = function(arr) {
    let swapped;
    for(let i = 0; i < arr.length - 1; i++) {
        swapped = false;
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j + 1);
                swapped = true;
            }
        }
        if(!swapped) break;
        // swapped 이라는 flag 변수를 주어 스왑이 이루어 지지 않은 부분은 즉 정렬할 필요가 없는 데이터임 그래서 조기 종료할 수 있음
    }
};

/* 거품 정렬 구현 2 */
let ascending = function (x,y) {
    return x > y;
}

let descending = function(x,y) {
    return x < y;
}

let bubbleSort = function(arr, compare) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(compare(arr[j], arr[j+1])) {
                swap(arr, j, j + 1);
            }
        }
    }
}

/** 선택정렬 */

let selectionSort = function(arr, compare) {
    for(let i = 0; i < arr.length; i++) {
        let k = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(compare(arr[k], arr[j])) k = j;
        }
        swap(arr, i, k);
    } 
}

// 삽입 정렬
let insertionSort = function(arr, compare) {
    for(let i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        let j;
        for(j = i - 1; j >= 0; j--) {
            arr[j + 1] = arr[j];
            if(compare(tmp, arr[j])) break;
        }
        arr[j+1] = tmp;
    }
}

// 병합 정렬 
let mergeSort = function(arr, compare) {
    if(arr.length === 1) return arr;

    let m = (arr.length / 2).toFixed(0); // middle index
    let left = mergeSort(arr.slice(0, m), compare);
    let right = mergeSort(arr.slice(m), compare);

    let i = 0, // left index
        j = 0, // right index
        k = 0; // result array index
    while(i < left.length && j < right.length) {
        arr[k++] = compare(left[i], right[j]) ? right[j++] : left[i++];
    }
    while(i < left.length) arr[k++] = left[i++];
    while(j < right.length) arr[k++] = right[j++];

    return arr;
}

// 퀵정렬
let quickSort = function(arr, compare, s = 0, e = arr.length - 1) {
    let start = s;
    let pivot = arr[e];

    for(let i = s; i <= e; i++) {
        if(compare(pivot, arr[i])) {
            swap(arr, start, i);
            start++;
        }
    }
    swap(arr, start, e);

    if(start - 1 > s) quickSort(arr, compare, s, start - 1);
    if(start + 1 < e) quickSort(arr, compare, start + 1, e);
}

// 성능측정
function benchmark(arr, callback, order) {
    let start = Date.now();

    callback(arr, order);

    return Date.now() - start;
}

// 더미 데이터 생성
let init_array = [];
let max = 30000;
for(let i = 0; i < max; i++) {
    init_array.push(Math.round(Math.random() * max));
}

/* Test code */
// let init_array = [6,5,1,3,2,4];

/* let array = [...init_array];
bubbleSort_1(array);
console.log(array);
array = [...init_array];
bubbleSort_2(array);
console.log(array);
array = [...init_array];
bubbleSort_3(array);
console.log(array); */

let array;

let sorting = [bubbleSort, selectionSort, insertionSort, mergeSort, quickSort];
let order = [ascending, descending];
for(let i = 0; i < sorting.length; i++) {
    for(let j = 0; j < order.length; j++) {
        array = [...init_array];
        console.log(sorting[i].name, order[j].name, benchmark(array, sorting[i], order[j])+'ms' );
        // sorting[i](array, order[j]);
        // console.log(array);
    }
}

/**
 * 병합정렬, 퀵 정렬이 가장 많이 쓰이는 정렬 기법 외워두는게 좋음
 * 요즘 라이브러리 사용하는 것을 많이 허락해주므로 라이브러리 사용하는게 좋지만 코드와 동작 원리를 외워두면 좋음
 * 
 */