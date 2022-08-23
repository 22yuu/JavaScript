/**
 * 스레드 : 프로그램의 실행 단위
 * 현재 상황을 예를 들면 2개의 스레드가 병렬로 실행되고 있음
 * - 강의를 보는 눈
 * - 강의를 듣는 귀
 * 
 * 자바스크립트는 싱글 스레드 언어임 때문에 비동기 개념이 중요함
 * 싱글 스레드이기 때문에 한 번에 한 작업만, 하나의 main thread에서 처리될 수 있음
 * 그리고 다른 작업은 앞선 작업이 끝나야 수행됨
 * 
 * 이러한 비동기 동작은 예측하기 어렵고 코드를 작성한 부분과 다른 동작을 할 때가 많아서 익히기 어려운 개념임
 * 
 */

const btn = document.querySelector('button');

// 사용자가 버튼을 클릭할때마다 함수를 실행시켜준다.
btn.addEventListener('click', () => {
    // addEventListener는 비동기!
    alert('You clicked me!');

    let pElem = document.createElement('p');

    pElem.textContent = 
        'This is a newly-added paragraph.';
    document.body.appendChild(pElem);
});

console.log('시작 ===');

setTimeout(() => {
    console.log('Set Timeout');
}, 1000);

console.log('종료 ===');