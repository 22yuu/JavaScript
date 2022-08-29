// 햄버거 버튼
const $sidebarToggleButton = document.querySelector('.side-bar-toggle');
const $sidebar = document.querySelector('.side-bar');
const $backDrop = document.querySelector('.back-drop');

$sidebarToggleButton.addEventListener('click', () => {
    $sidebar.classList.toggle('open'); // side-bar가 가지고 있는 클래스 리스트에 open이 없으면 추가하고 있으면 제거하는 토글 기능을 추가
    $backDrop.style.display = 'block';
});

$backDrop.addEventListener('click', () => {
    $sidebar.classList.toggle('open'); // classList add, delete를 활용해도 무방
    $backDrop.style.display = 'none';
})

// 자바스크립트로 모든 애니메이션을 구현하는 것보다 css로 구현할 수 있는 기능들은 css로 구현하는 것이 좋음