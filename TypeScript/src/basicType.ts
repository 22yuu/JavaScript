// primitive type
let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;

// reference type
let objValue: object;

// symbol type
let symbolValue: symbol;


// 배열

let nameList: string[]; // 배열에 대한 타입을 정의
nameList = [1,3]; // 숫자로 초기화하려고 했을 때 에러 발생
nameList.push(333);
nameList.push('hello');

// inline type
let user1: {name:string, score: number};
 user1 = {
    name: 'jay',
    score: 30,
 }

 let user2 : {name: string, score: number}; // 이처럼 타입이 여러번 쓰일 경우 인터페이스 혹은 클래스로 타입을 정의해서 사용할 수 있음 다음 시간에 자세히

 // 튜플
 let tuple: [number, string];
 tuple = [1, 2] // error
 tuple = [1, "2"];