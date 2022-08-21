// Object.values()
// 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 리턴
// 이 배열은 for...in 구문과 동일한 순서를 가집니다.

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

const values = Object.values(data);

console.log(values);