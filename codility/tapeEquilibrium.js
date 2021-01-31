function solution(A) {
    const result = [];
    for (let i = 0; i < A.length; i++) {
        const frontP = A.slice(0,i + 1).reduce((a,b) => a + b, 0)
        const backP = A.slice(i + 1,A.length).reduce((a,b) => a + b, 0)
        result.push(Math.abs(backP - frontP))
    }
    return result.reduce((a, b) => a > b ? b : a)
}

console.log(solution([3,1,2,4,3]))