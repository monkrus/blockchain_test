
/**
 * Real test Q17
 *
 *Merge strings
 --------------------------------------
 We perform the following sequence of actions:

 1. We must merge strings a and b by appending alternating characters 
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
function merge (str1, str2) {

    var a = str1.split("").filter(Boolean);
  
    var b = str2.split("");
  
    var mergedString = '';
  
  
    for(var i = 0; i < a.length || i < b.length; i++) {  //loop condition checks if i is less than a.length or b.length
     if(i < a.length)  //if i is less than a.length add a[i] to string first.
       mergedString +=  a[i];
     if(i < b.length)  //if i is less than b.length add b[i] to string.
       mergedString +=  b[i];
    }
  return mergedString;
  
  }
  console.log(merge('abc','def'));
  console.log(merge('ab','def'));

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

