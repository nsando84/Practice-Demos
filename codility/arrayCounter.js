function solution(N, A) {
    let counterArr = new Array(N).fill(0)
    for (let i = 0; i < A.length; i++) {
        if (A[i] >= 0 && A[i] <= N) {
            counterArr[A[i]-1]++
        } else if (A[i] > N) {
            const max = Math.max(...counterArr)
            counterArr.fill(max)
        }
    }
    return counterArr
}

console.log(solution(1, [1]))