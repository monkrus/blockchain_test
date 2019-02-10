/* Real test 9.0

 *Solidity code problem: 
 
 What is wrong with the code?

 -unchecked recursion
 -missing parenthesis
 -incompatible types
 -wrong typecasting
 -undeclared variable of function
 -wrong use of conditional
 -missing semicolon

 //
  I think this contract missing pure function (...public pure returns...)

  */


function processData (uint number) public returns (bool) {
    uint _number =number;
    if(number == _number) {
    return true;
     } else {
         return false;
     }
    }


   
     
   