let result;

// function forloop(s, t, number) {
//     let acc = 0;
    
//     for(let i = 1;  i <= number; i++) {
//         if(i == 1) {
//             acc += s;
//         } else {
//             acc += t;
//         }

//         console.log(i, acc);
//     }
//     return acc;
// }

// result = forloop(3, 2, 5);

function recursive(s, t, number, idx) {

    if(idx === number) {
        return;
    }

    console.log(idx+1, s);

    recursive(s+t,t,number,idx+1);
}

recursive(3,2,5,0);
console.log(result);