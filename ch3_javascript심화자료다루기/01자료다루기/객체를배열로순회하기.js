// Object.keys();
// 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환

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

const keys = Object.keys(data);

console.log(keys);