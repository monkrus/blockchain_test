/* Real test 7.0

 *Solidity code problem: 
 
 What is wrong with the code?
 -unchecked recursion
 -missing parenthesis
 -incompatible types
 -wrong typecasting
 -undeclared variable of function
 -missing semicolon<------CORRECT
 -wrong use of conditinal
*/


 function processData (uint number) public returns (bool) {
 if (!processData(1))    {
 return true;   
    }
 }

  

