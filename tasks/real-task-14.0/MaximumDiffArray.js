/*
 *Real test 14.0
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

assert.strictEqual(getMinimumUniqueSum(arr), 32)

function getMinimumUniqueSum(numbers) {
  numbers.sort()

  let ii     = 0
  let length = numbers.length - 1
  for (let i = 0; i < length; i += 1) {
    let currentNumber = numbers[i]
    let nextNumber    = numbers[i + 1]

    if (currentNumber !== nextNumber) { continue }

    numbers.splice(i, 1)

    for (ii = Math.max(ii, i); ii < numbers.length; ii += 1) {
      const firstNumber = numbers[ii]

      if (ii + 1 === numbers.length) {
        numbers.push(firstNumber + 1)
        length -= 1
        break;
      }

      const secondNumber = numbers[ii + 1]
      if (firstNumber + 1 < secondNumber) {
        arr.splice(ii + 1, 0, firstNumber + 1)
        break
      }
    }
  }

  return arr.reduce((sum, number) => sum + number, 0)
}