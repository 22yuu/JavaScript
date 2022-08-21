/**
 * unshift => 배열의 앞에 요소 추가
 * push => 배열의 끝에 요소 추가
 * shift => 배열의 앞에 요소 제거
 * pop => 배열의 끝에 요소 제거
 * splice => 배열의 인덱스를 기반으로 요소 추가 및 제거
 */


 const arr = ['one', 'two', 'three']

 // 배열의 끝에 요소 추가
 arr.push(1)
 arr.push(2)

 // 배열의 앞에 요소 추가
 arr.unshift(0)
 arr.unshift(-0)

 // 배열의 끝에 요소 제거
 arr.pop()
 arr.pop()
 
 // 배열의 앞 요소 제거
 arr.shift()
 arr.shift()

 // splice() 메섣느느 배열의 기존 요소들을 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경

 // splice를 이용하여 배열의 앞 부분에 요소 추가
 arr.splice(0,0, 'four') // 0번째 부터 0개를 지운 후 그 자리에 four를 추가

// splice의 단점은 원본 배열을 훼손! splice 뿐만 아니라 위의 메소드들은 원본 배열을 훼손함

const copyArr = arr;

copyArr.push(0)
copyArr.unshift(10)
copyArr.splice(1, 1, 'four')

arr
copyArr
 