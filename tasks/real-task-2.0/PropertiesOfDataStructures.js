/**
 * Real test 2.0
 *
 *Properties of Data Structures

 --------------------------------------

 We perform the following sequence of actions:

 1. Insert the following elements into a set: 1, 2, 9, 1, 2, 3, 1, 4, 1, 5, 7.

 2. Convert the set into a list and sort it in ascending order.

 ----------------------------------------------------------------------------------

 Which option denotes the sorted list?

 - {1,2,3,4,5,7,9}
 - {9,7,5,4,3,2,1}
 - {1,1,1,1,2,2,3,4,5,7,9} <- correct
 - None of the above

 */


var myArray = [1, 2, 9, 1, 2, 3, 1, 4, 1, 5, 7];
myArray.sort();


var mySet = new Set([1, 2, 9, 1, 2, 3, 1, 4, 1, 5, 7]);
var list = new List([1, 2, 9, 1, 2, 3, 1, 4, 1, 5, 7]);
list.sort();


(11) [1, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];