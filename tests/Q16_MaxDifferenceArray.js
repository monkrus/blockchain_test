/**
 * Real test Q16
 *
 *  Maximum Difference in Array
 --------------------------------------
 You are given an array of integers and must compute
 the maximum difference between any item and any lower indexed smaller item for all possible pairs.

 For example, given an array [1,2,6,4], you would first compare 2 to the element to its left. 
 1 is smaller, so calculate the difference 2-1=1.
 6 is bigger than 2 and 1, so calculate the diffences 4 and 5.
 4 is only bigger than 2 and 1, and the differences are 2 and 3.
 The largest differences was 6-1=5.

 */
// OPTION 1

function maxDifference(a) {
    let maxDiff = null;
    for (let x = 0; x < a.length; x++) {
        for (let y = x + 1; y < a.length; y++) {
            if (a[x] < a[y] && maxDiff < (a[y] - a[x])) {
                maxDiff = a[y] - a[x]
            }
        }
    }
    return maxDiff === null ? -1 : maxDiff;
}


// OPTION 2
function find_deviation(v, d) {
    var maxDifferenceGlobal = 0;
    var len = v.length - d + 1;
    for(var i = 0; i < len; ++i) {
        var min, max;
        if (v[i] <= v[i + 1]) {
            min = v[i]; max = v[i + 1];
        } else {
            max = v[i]; min = v[i + 1];
        }
        for(var j = i + 2; j < i + d; ++j) {
            if (min > v[j]) { min = v[j]; }
            if (max < v[j]) { max = v[j]; }
        }
        var maxDifferenceLocal = Math.abs(max - min);
        if(maxDifferenceLocal > maxDifferenceGlobal) {
            maxDifferenceGlobal = maxDifferenceLocal;
        }
    }
    console.log(maxDifferenceGlobal);
}