function solution(A) {
    const permCheck = Array.from(new Set(A))
    if (permCheck.length !== A.length) return 0;

    function sorter(arr) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j+1]) {
              const lesser = arr[j+1];
              arr[j+1] = arr[j];
              arr[j] = lesser;
            }
          }
        }
        return arr;
      }
    const sortedArr = sorter(permCheck)

    const totalOfSorted = sortedArr[0] + sortedArr[sortedArr.length-1]
    const checkerSorted =  (sortedArr[sortedArr.length-1] - sortedArr.length+1) + sortedArr[sortedArr.length-1]
  
    const sortedL = sortedArr.length / 2
   
    const sortedArrNumer =  sortedL * (totalOfSorted)
    const checker =  sortedL * (checkerSorted)

    return checker === sortedArrNumer ? 1 : 0

}

console.log(solution([0,1]))