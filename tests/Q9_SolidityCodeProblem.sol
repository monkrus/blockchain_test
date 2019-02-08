pragma solidity ^0.5.4;

/**
 * Real test Q9 final
 *Solidity code problem: missing semicolon
 
 What is wrong with the code?
 -unchecked recursion
 -missing parenthesis
 -incompatible types
 -wrong typecasting
 -undeclared variable of function
 -missing semicolon<------CORRECT
 -wrong use of conditinal
*/


 function processData (int data) public returns (int){
  int currData = data;
  dataTable[currdata] = "New Data"
  data = currData;
  return data;
 }
