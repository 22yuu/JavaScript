/**
 * 커스텀 에러
*/

 class LoginError extends Error {
    constructor (message) {
        super(message)

        this.name = 'Login Error';
    }
 }

 // 

 function login(id, pw) {
     if(id !== 'zero') {
         throw new LoginError('아이디 불일치');
    }

    if(id === 'zero' && pw === 0000) {
        return true;
    }
}

try {
    login('one', 111);
} catch (error) {
    console.error(error);
    if(error instanceof LoginError) {
        // error 객체가 LoginError로 부터 파생이 된 것이면 이렇게 if문을 통해 단계별로 에러 처리 가능!!!!
        console.error('로그인 에러가 발생했습니다.');
    } else {
        console.error('에러 발생');
    }

    
    window.alert(error); // 사용자에게 노출
} finally {
    console.log('로그인 시도 시간 : ' + new Date());
}