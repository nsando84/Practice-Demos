function solution(A) {
    const countedObj = A.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1;
        return a
    }, {})
    for (const num in countedObj) {
        if (countedObj[num] === 1) {
            return num
        }
    }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]))