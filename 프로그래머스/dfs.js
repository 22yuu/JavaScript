// 8방향
const dx = [1,1,0,-1,-1, -1, 0, 1];
const dy = [1,0,1, 1, 0, -1, -1,-1];

function search(x, y, map, visited, N) {
    const queue = [];
    queue.push([x, y, 1]); // x, y 좌표와 count 같이 
    visited[x][y] = true;
    let cnt = 0;

    while(queue.length) {

        let np = queue.shift();
        // console.log(cnt++)
        if(np[0] == N && np[1] == N) return np[2];
        
        for(let d = 0; d < 8; d++) {
            let nx = np[0] + dx[d];
            let ny = np[1] + dy[d];

            if( nx > N || ny > N || nx < 1 || ny < 1 || map[nx][ny] == undefined ) continue;

            if(visited[nx][ny]) continue;

            visited[nx][ny];
            if(map[nx][ny] === 0) {
                queue.push([nx, ny, np[2]+1]);
            } else if(map[nx][ny] > 0) {
                queue.push([nx, ny, np[2]+1]);
                break;
            }
            
        } // end for
        
    } // end while
} // end search func

function dfs(x, y, map, visited, N, cnt) {

    visited[x][y] = true;
    // console.log(`x: ${x}, y: ${y}, cnt : ${cnt}`)

    // dfs 재귀 종료 조건
    if(map[x][y] > 0) {
        cnt += 1;
        console.log(cnt);
        return cnt;
    }

    for(let d = 0; d < 8; d++) {
        let nx = x + dx[d];
        let ny = y + dy[d];
        
        if(nx > N || ny > N || nx < 1 || ny < 1 || map[nx][ny] === undefined) continue;

        if(visited[nx][ny]) continue;

        visited[nx][ny] = true;
        if(map[nx][ny] === 0) {
            dfs(nx, ny, map, visited, N, cnt+1);
            map[nx][ny] = -3
            // console.log(cnt)
        } else if(map[nx][ny]) {
            cnt += 1;
            map[nx][ny] = -3;
        }
    } // end for loop
} // end dfs func

function solution(N, mine, P) {
    let answer = 0;
    let map = new Array(N+1);
    let visited = new Array(N+1);

    // map 생성
    for(let i = 1; i <= N; i++) {
        map[i] = new Array(N+1);
        visited[i] = new Array(N+1);
    }

    // map 초기화
    for(let i = 1; i <= N; i++) {
        for(let j = 1; j <= N; j++) {
            map[i][j] = 0;
            visited[i][j] = false;
        }
    }
    
    // console.log(map);

    // // mine 생성
    for(let i = 0; i < mine.length; i++) {
        let x = mine[i][0];
        let y = mine[i][1];

        // 지뢰 주변 8방향 검사해서 mine 개수
        map[x][y] = -1 // mine은 -1로 표기

        for(let d = 0; d < 8; d++) {
            let nx = x + dx[d];
            let ny = y + dy[d];

            // console.log(`${nx} ${ny}`)
            if( nx > N || ny > N || nx < 1 || ny < 1 || map[nx][ny] == undefined ) continue;

            map[nx][ny] += 1;
        }
    }
    // console.log(map);
    
    // 선택 지점 8방향 탐색
    let x = P[0]; 
    let y = P[1];

    // answer = search(x, y, map, visited, N);
    // answer = dfs(x, y, map, visited, N, 1);
    map[x][y] = -3;
    dfs(x,y, map, visited, N, 1);
    console.log(map)

    for(let i = 1; i <= N; i++) {
        for(let j = 1; j <= N; j++) {
            if(map[i][j] === -3) {
                answer++;
            }
        }
    }
    return answer;
}
