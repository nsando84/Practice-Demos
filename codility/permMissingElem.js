function solution(A) {
    const sortedArr = [...A].sort()
    const sumArr = [...A].reduce((a,b) => a + b, 0)
    return (A.length + 1) / 2 * (sortedArr[0] + sortedArr.length + 1) - sumArr
}
console.log(solution([2,3,5,1]))