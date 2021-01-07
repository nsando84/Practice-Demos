'use strict';


function vanity(codes, numbers) {
    
    const result = []
    
    const codeConverter = codes.map(e => {
        const converted = e.split('').map(num => { 
              
            if (typeof num === 'Number') {
                return num
            }
            
            let letter = num.toLowerCase()
   
            if (letter.match(/[a-c]/g)) {
                return 2
            } else if (letter.match(/[d-f]/g)) {
                return 3
            } else if (letter.match(/[g-i]/g)) {
                return 4
            } else if (letter.match(/[j-l]/g)) {
                return 5
            } else if (letter.match(/[m-o]/g)) {
                return 6
            } else if (letter.match(/[p-s]/g)) {
                return 7
            } else if (letter.match(/[t-v]/g)) {
                return 8
            } else if (letter.match(/[w-z]/g)) {
                return 9
            } else {
                return letter
            }
        }).join('')
        
        return converted
    })
    
    codeConverter.forEach(checkNum => {
        numbers.forEach(numbersArr => {  
            if (numbersArr.includes(checkNum)) {     
                if (result.indexOf(numbersArr) === -1) {
                    result.push(numbersArr)
                }
            }
        })
        
    })
    
    return result.sort()
}

