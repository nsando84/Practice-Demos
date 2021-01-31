function solution(N) {
    const result = [];
    let oneCount = 0
    let num = N
    tmp = ''
    while (num > 0) {
        if (num % 2 === 0) {
            tmp += 0;
        } else {
            oneCount++
            result.push(tmp.length);
            tmp = '';
        } 
        num = Math.floor(num / 2);
    }
    if (oneCount === 1) {
        return 0
    }
    const arrayMax = Math.max(...result)
    return tmp.length > arrayMax ? tmp.length : arrayMax
}

console.log(solution(529))

// 9 / 2 = 4 ---1
// 4 / 2 = 2 ---0
// 2/2 == 1 --0
// 1/2 == .5 -- 1