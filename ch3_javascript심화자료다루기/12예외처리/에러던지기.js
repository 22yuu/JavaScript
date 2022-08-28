/**
 *  에러 던지기
 */

function login(id, pw) {
    if(id === 'zero' && pw === 0000) {
        return true;
    }

    throw new Error('로그인 실패');
}

try {
    login('one', 111);
} catch (error) {
    console.error(error);
    console.error('에러 발생');
    window.alert(error); // 사용자에게 노출
} finally {
    console.log('로그인 시도 시간 : ' + new Date());
}