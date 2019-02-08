/**
 *Real test Q15 final
 *Given an array, you must increment any duplicate elements until all its elements are unique. 
 *In  addition, the sum of its elements must be the minimum possible within the rules.
 *
 * If arr = [3, 2, 1, 2, 7], then arrunique = [3, 2, 1, 4, 7] and its elements sum to a minimal
// value of 3 + 2 + 1 + 4 + 7 = 17.
 *
  --------------------------------------
 */

const assert = require('assert')

const arr = [3, 7, 7, 2, 1, 2, 7]

assert.strictEqual(getMinimumUniqueSum(arr), 34)

function getMinimumUniqueSum(numbers) {
  numbers.sort()

  let i = 0
  do {
    while(numbers[i] === numbers[i +1]) {
      
      let currentNumber = numbers[i]
      numbers.splice(i, 1)
      let j = i
      while(currentNumber === numbers[j+1] && j < (numbers.length - 1)) j++;
      while(currentNumber <= numbers[j]) currentNumber++;
      if(j === (numbers.length - 1)) {
        arr.push(currentNumber)
      } else {
        arr.splice(j + 1, 0, currentNumber)
      }
      
    }
    i = i + 1
      
  } while(i < numbers.length - 1)

  console.log(arr.toString());
  return arr.reduce((sum, number) => sum + number, 0)
}