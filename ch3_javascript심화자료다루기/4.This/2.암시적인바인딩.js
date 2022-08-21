/**
 * this
 * 
 * 1. 전역공간
 * 2. 함수
 * 3. 메서드
 * 
 * 암시적인 this 바인딩
 */

// 전역 공간에서 this는 window를 가르킴
window.alert('Hello')
this.alert('Hello') // 동일하게 작동함


// 함수에서의 this

function func() {
    console.log(this); // window를 가르킴 전역 공간과 다르지 않다!!
}


// 객체
const obj = {
    name: 'obj',
    method: function() {
        return this.name // 여기서 this는 호출되는 name을 가르킴
    }
}

obj.method() // 'obj'

const obj2 = {
    name: 'obj',
    depth : {
        name: 'nested obj',
        method: function() {
            return this.name // 'nested obj'을 가르킴
        }
    }
}

obj2.depth.method() // 'nested obj'