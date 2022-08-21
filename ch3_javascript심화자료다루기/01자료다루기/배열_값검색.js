/**
 * 배열 값 검색
 */

const members = ['현석', '장현석', '제로', '베이스']

const result = members.find(function(member) {
    return member === '제로'
})

const findIndex = members.findIndex(function(member) {
    return member === '제로'
})

const indexOf = members.indexOf('제로') // indexOf는 배열을 탐색할 때 맨 처음 0부터 탐색 좌 -> 우
const lastIndexOf = members.lastIndexOf('제로'); // lastIndexOf는 배열을 탐색할 때 마지막 요소부터 탐색 좌 <- 우
const includes = members.includes('제로'); // includes는 있으면 true, 없으면 false를 반환

result
findIndex
indexOf
lastIndexOf
includes