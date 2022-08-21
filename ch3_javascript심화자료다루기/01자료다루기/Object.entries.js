// Object.entires()
// 메서드는 for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성
// [key, value]  쌍의 배열을 반환

/**
 * Object.entires()
 * 메서드는 for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성
 * [key, value]  쌍의 배열을 반환
 * 
 * 해당 메서드에 의해 반환된 배열의 순서는 객체가 정의된 방법과 관련이 j
 * 배열 순서가 쓸 곳이 있다면 다음과 같인 정렬을 먼저 하는게 좋음
 * Obeject.entries(obj).sor((a,b) => b[0].localeCompare(a[0]));
 */

 const data = {
    squadName: 'Super hero squad',
    homeTown: 'Metro City',
    formed: 2016,
    secretBase: 'Super tower',
    active: true,
    members: [
        {
            name: 'Molecule Man',
            age: 29,
            secretIdentity: 'Dan Jukes',
            powers: ['Radiation resistance', 'Turning tiny', '']
        },
        {
            name: 'Madame Uppercut',
            age: 39,
            secretIdentity: 'Jane Wilson',
            powers: ['Million tonne puch', 'Damage resistance', '']
        },
        {
            name: 'Eternal Flame',
            age: 1000000,
            secretIdentity: 'Unknown',
            powers: ['Immortality', 'Heat Immunity', 'Inferon']
        }
    ]
}

const entries = Object.entries(data);

console.log(entries);