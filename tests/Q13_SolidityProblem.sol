/**
 * Real test Q13 final
 *
 *  Solidity Code Problem
 --------------------------------------
 The following piece of Solidity code has a problem (you do not need to know any Solidity to catch it).

 */
 // Can you spot it?

function processData (int number, int multiplier, int variation, int percent) public returns (int) {
    return ((number * multiplier) / percent) * variation) - variation;
}

/** ----------------------------------------------------------------------------------

 Pick one of the choice:

 - Unchecked Recursion
 - Missing parentheses <<< --- CORRECT 
 - Incompatible types
 - Wrong typecasting
 - Undeclared variable or function
 - Missing Semicolon
 - Wrong use of conditional

 */

