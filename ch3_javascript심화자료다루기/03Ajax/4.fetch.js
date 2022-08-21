/**
 * Fetch API
 * XMLHttpRequest에서 부족했던 부분을 상당부분을 보완함
 * Fetch API는 강력하고 유연한 조작이 가능함
 * 과거에는 XMLHttpRequest가 불편해서 Jquery AJAX를 많이 사용함
 * 
 * https://jsonplaceholder.typicode.com/
 * 
 */


 fetch('https://jsonplaceholder.typicode.com/todos/1') // 1. URL fetch 요청
 .then(response => response.json()) // 2. Fetch 응답 객체를 받아옴
 .then(json => console.log(json)) // 3. 응답 객체가 JSON => 순수 JS 객체로 변환

 


