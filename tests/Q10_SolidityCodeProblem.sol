/** Real test Q10 final

 *Solidity code problem: 
 
 What is wrong with the code?
 -unchecked recursion<----CORRECT
 -missing parenthesis
 -incompatible types<
 -wrong typecasting
 -undeclared variable of function
 -missing semicolon
 -wrong use of conditinal
*/


 function processData (uint number) public returns (bool) {
 if (!processData(1))    {
 return true;   
    }
 }

  

