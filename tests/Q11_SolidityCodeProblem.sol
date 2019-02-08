
/**  Real test Q11 final

 *Solidity code problem: 
 
 What is wrong with the code?

 -unchecked recursion<---CORRECT
 -missing parenthesis
 -incompatible types
 -undeclared variable of function
 
*/


function processData (int data) public returns (int) {
    approveProcess(data);

    return data;   
       }
    
    function approveProcess(int data) public {
        processData(data+1)
    }
   
     
   
   