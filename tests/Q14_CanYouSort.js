/*
*Real test Q14
*Sort an array of integers.Sorting must first be by frequency of occurence,
*then by value.

*For instance, given an array [4,5,6,5,4,3],
*there is one each of 6`s and 3`s and there are two 4`s and 5`s.
*The array will be [3,6,4,4,5,5].

*Complete the function customSort, it must print the array
*each element on the separate line, sorted ascending first by frequency of occurence,
*then by value within frequency.

*/

var arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];

function foo(arr) {
    var a = [], b = [], prev;
    
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
    
    return [a, b];
}

console.log(foo(arr));

/*var result = foo(arr);
document.write('[' + result[0] + ']<br>[' + result[1] + ']') */

