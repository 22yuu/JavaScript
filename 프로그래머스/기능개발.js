
function solution(progresses, speeds) {
    var answer = [0];
    let days = new Array(progresses.length);
    let max = undefined;
    
    for(let i = 0; i < progresses.length; i++) {
        days[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
        //process.stdout.write(`${days[i]} `)
    }
    
    max = days[0];
    
    for(let i = 0, j = 0; i < days.length; i++) {
        
        if(days[i] <= max) {
            answer[j] += 1;
        } else {
            max = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}