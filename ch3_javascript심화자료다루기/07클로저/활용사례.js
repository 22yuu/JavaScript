/**
 * Closure (활용 사례)
 * - debounce, 쓰로틀 관계?
 */

buttonElement.addEventListener(
    'click',
    debounce(handleClick, 500),
)

// debounce는 자바스크립트의 어떠한 이벤트가 실행이 될 때 지연을 해주는 기법
// 무한스크롤, 클릭을 여러번 누루게 될 떄 지연 시간을 줘야할 경우 등에 사용
function debounce(func, timeout = 300) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {func.apply(this, args);}, timeout)
    }
}