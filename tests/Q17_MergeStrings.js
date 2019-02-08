
/**
 * Real test Q17 final
 *
 *Merge strings
 --------------------------------------
 We perform the following sequence of actions:

 1. We must merge strings st1 and st2 by appending alternating characters
    into some new string, mergedString.
 2. Once all of the characters in one string have been merged, append the remaining characters
    to mergedString.

 ----------------------------------------------------------------------------------
 Sample input:

 abc
 def

 Sample output:

 adbecf
 */

 // Option 1
function merge (a, b) {

    var st1 = a.split("").filter(Boolean);

    var st2 = b.split("");

    var mergedString = '';


    for(var i = 0; i < st1.length || i < st2.length; i++) {  //loop condition checks if i is less than st1.length or st2.length
     if(i < st1.length)  //if i is less than st1.length add st1[i] to string first.
       mergedString +=  st1[i];
     if(i < st2.length)  //if i is less than st2.length add st2[i] to string.
       mergedString +=  st2[i];
    }
  return mergedString;

  }

/*  console.log(merge('abc','def'));
  console.log(merge('ab','def'));*/

//Option 2

String result = "";
for(int i=0; i<s1.length();i++){
  result += s1.charAt(i);
  result += s2.charAt(i);
}
return result;

//Option 3 (ES6)

var a = "ab",
    b = "def",
    result = Array.from(a.length > b.length ? a : b, (_, i) => (a[i] || "") + (b[i] || ""))
                  .join('');

console.log(result);

