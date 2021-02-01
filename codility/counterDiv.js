function solution(A, B, K) {
    if (K === 0 || A >= B) return 0
    if (A % K === 0) {
        return Math.abs(Math.floor((1 / K) * (A - B))) + 1
    }
    return Math.abs(Math.floor((1 / K) * (A - B)))
}

console.log(solution(10, 10, 1))