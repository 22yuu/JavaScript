console.log(1 === 1.0); // true -> 왜 true일까?? 바로 자바스크립트의 경우 부동소수점 방식(IEEE754) 때문이다. 깊게 들어가면 어렵고 내용이 많아 궁금하면 따로 찾아볼것
console.log(Math.pow(2, 9999)); // Infinity
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Not a Number 숫자 인지 아닌지
console.log(isNaN('1')); // false
