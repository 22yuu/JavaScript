/**
 * 배열 요소 병합
 */

const array = ['JS', 'HTML', 'CSS'];

const newArr = array.concat(['TS', 'JAVA']); // 원본 배열을 훼손하지 않고 병합
const newArr2 = ['TS', 'JAVA'].concat(array); // concat 메서드 인자로 들어온 배열이 뒤쪽으로 붙어서 병합된다.

array
newArr
newArr2

// 배열 구조 분해

const newArr3 = [...array, 'TS', 'JAVA'] // const newArr = array.concat(['TS', 'JAVA'])와 동일함
const newArr4 = ['TS', 'JAVA', ...array] // const newArr2 = ['TS', 'JAVA'].concat(array)와 동일함
newArr3
newArr4
