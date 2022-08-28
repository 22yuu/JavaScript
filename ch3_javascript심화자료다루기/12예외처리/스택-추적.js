/**
 * 스택-추적
 * 
 * 스택 형태로 에러를 추적할 수 있음
 */

try {
    x();
} catch (e) {
    console.error(e.stack);
}