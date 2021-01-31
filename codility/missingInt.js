
function solution(A) {
    const sortedSet = Array.from(new Set(A.filter(a => a > 0).sort()))
    if (!sortedSet.length) return 1
    let checker = 0
    for (let i = sortedSet[0]; i < sortedSet.length + 1; i++) { 
        if (sortedSet.indexOf(i) === -1 && i > 0) {    
            checker++
            return i
        }
    }
    if (checker === 0) {
        return sortedSet[sortedSet.length-1] + 1
    }
}
console.log(solution([-1, -3]))