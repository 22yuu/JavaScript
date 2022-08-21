/**
 * 프로펕치 열거
 */

const obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    prop4: 'value4',
}


for(const key in obj) {
    // key값을 열거
    console.log(key); // prop1, prop2, prop3, prop4
    // value를 열거
    console.log(obj[key]) // value1, value2, value3, value4

    if(obj.hasOwnProperty(key)) {
        // 해당 키가 해당 객체를 가지고 있는기 맞느냐?
        // 값을 열거할 때는 hasOwnProperty를 사용해서 체이닝으로 인한 상위의 값을 가져오는 것을 방지
        // 만약 현재 레벨에서 prop1 키가 상위에 동일하게 prop1키가 있으면 해당 값을 들고 올 수 있다는 뜻인듯?
        console.log(obj[key]) // value1, value2, value3, value4
    }
}
