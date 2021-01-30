A = [3, 8, 9, 7, 6]
K = 3

function solution(A, K) {
    let newArr = [...A];
    for (let i = 0; i < K; i++) {
        newArr = [...newArr.slice(newArr.length-1),...newArr.slice(0,newArr.length-1)]
    }
    return newArr
}

console.log(solution(A, K))