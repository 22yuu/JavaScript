/**
 * 연말이 다가와 학생들에게 개근상을 주려고 한다. 학생 별 1학기 개근 현황과 2학기 개근 현황을 파악하고
 * 있어, 이 정보를 바탕으로 학생 별 올해 1년 동안 개근을 했는지 판단하는 프로그램을 제작하시오. 
 * 개근상은 A학생이 1학기와 2학기 모두 춠헉했을 경우에만 수여한다.
 * 입력은 1학기 개근한 학생, 2학기 개근한 학생 정보가 배열로 주어지며, 1년 전체 개근핞 ㅏㄱ생을 1하긱 개근한 학생 순으로 정렬하여 배열 형태로 반환한다.
 */

function Dictionary(items = {}) {
    this.items = items;
}

Dictionary.prototype.has = function(key)  {
    return this.items.hasOwnProperty(key);
}

Dictionary.prototype.set = function(key, value) {
    this.items[key] = value;
}

function answer2(arr1, arr2) {
    let result = [];
    // arr2에 대한 key/value 형태로 저장 -> 학생 있는지 없는지 확인
    let temp = new Dictionary();
    for(let i = 0; i < arr2.length; i++) {
        temp.set(arr2[i], true);
    }

    // arr1 for arr2 dictionary 학생 있는지 없는지 유무를 통해 빠르게 확인할 수 있음
    for(let i = 0; i < arr1.length; i++) {
        if(temp.has(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    return result;
}

function answer(arr1, arr2) {
    let result = [];

    for(let name of arr1) {
        if(arr2.includes(name)) {
            result.push(name);
        }
    }

    return result;
}

let input = [
    [["Kail", "Oliver", "Naomi"],["Oliver","Naomi","Maya"]],
    [["Roxy", "Olga", "Kara", "Nana"], ["Oliver", "Roxy", "Kara", "Nana", "Maya"]],
    [["Roxy", "Ravi", "Nana", "Rei", "Karis", "Mana", "Naomi"], ["Olga", "Nana", "Rei", "Naomi", "Kail", "Ravi", "Kara"]]
]

for(let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1}`);
    console.log(answer(input[i][0], input[i][1]));
}