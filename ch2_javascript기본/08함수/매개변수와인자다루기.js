function func(obj) {
    const p1 = obj.p1
    const p2 = obj.p2
    const p3 = obj.p3
    const p4 = obj.p4

    console.log(p2, p4);
    return;
}

// 아래와 같이 단축해서 사용 가능
function func2({p1, p2, p3, p4}) {
    console.log(p2, p4);
    return;
}

const result = func({
    p2: 'p2',
    p4: 'p4',
})