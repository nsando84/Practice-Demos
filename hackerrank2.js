const text = 'bbbacccaa'

const maximumOccurringCharacter = (text) => {
    const tempResult = {}
    const result = [[0,0]]
    text.split('').forEach(b => {
       console.log(tempResult)
        tempResult[b] = tempResult[b] ? tempResult[b] + 1 : 1
    })
    for (const num in tempResult) {
        if (tempResult[num] > result[0][1]) {
            result[0] = [num, tempResult[num]]
        }
        if (tempResult[num] === result[0][1]) {
            if (text.indexOf(num) < text.indexOf(result[0][0])) {
                result[0] = [num, tempResult[num]]
            }
        }
    }


    return result[0][0]
}

// console.log(maximumOccurringCharacter(text))

tickets = [4, 13, 2, 3, 12, 14 ]
function maxTickets(tickets) {
    const result = []
    const sortedTicket = tickets.sort((a , b) => a - b)
    let tempArr = []
    for (let i = 0; i < sortedTicket.length; i++) {
        if (i === 0) {
            tempArr.push(sortedTicket[i])
        } else if (Math.abs(tempArr[0] - sortedTicket[i+1]) <= 1)
        {
            tempArr.push(sortedTicket[i])
        } else {
            result.push(tempArr)
            tempArr = []
            tempArr.push(sortedTicket[i])    
        }
    }
    console.log(tempArr)
    return result.sort()
}

console.log(maxTickets(tickets))