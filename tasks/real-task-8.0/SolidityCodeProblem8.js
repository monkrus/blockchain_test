/* Real test 8.0

 *Solidity code problem: 
 
 What is wrong with the code?

 -unchecked recursion
 -missing parenthesis
 -incompatible types<-------???
 -undeclared variable of function
 
*//


function processData (int data) public returns (int) {
    approveProcess(data);

    return data;   
       }
    
    function approveProcess(int data) public {
        processData(data+1)
    }
   
     
   
   