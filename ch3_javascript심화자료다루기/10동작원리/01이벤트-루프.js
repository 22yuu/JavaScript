/**
 * 이벤트 루프
 * 비동기방식으로 동시성을 지원하는 방법
 * 
 * 자바스크립트 엔진은 한 번에 한 개의 코드만 실행할 수 있다.
 * 하지만 사용되는 환경은 동시에 많은 작업이 처리된다.
 * 
 *  -프로세스: 프로그램을 메모리에 할당
 *  -스레드: 프로세스 내의 실행 단위
 *  -스택 LIFO
 *  -큐 FIFO
 * 
 * JS Engine
 * - Heap : 구조화 되어있지 않은 단순한 영역 (객체가 할당)
 * - Call Stack : 함수 처리를 저장하는 영역
 * - WEB API : 웹을 만들때 사용할 수 있는 모든 인터페이스
 * - Task Queue : Web API에서 비동기 작업들이 실행된 후 호출되는 콜백 함수들이 대기
 * 
 * 자바스크립트 코드를 실행시키면 Call Stack에서 처리할 함수들이 쌓인다.
 * 만약 여기서 setTimeout 같은 web API 인터페이스의 경우 JS Engine이 web API에 위임을 한다.
 * 
 * 그럼 위임을 받은 web API는 이제 자바스크립트 함수를 호출할 수 있으며 이러한 함수들은 Task Queue에서 대기를 한 후
 * 이벤트 루프를 통해서 Call Stack으로 넘어간다. 이때 Call Stack은 비어있어야 한다.
 * 
 * !이러한 이벤트 루프가 동작하는 것을 아래 링크에서 시각적으로 볼 수 있음
 * @see http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
 * 
 */

function third() {
    console.trace();
    console.log('세번째 수건')
}

function second() {
    console.log('두번째 수건')
    third();
}

function first() {
    console.log('첫번째 수건');
    second();
}

first();


// latentflip.com 이벤트 루프 동작 확인
$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('Hello --- ');
    }, 1500);
});

console.log('Hi! --- ');