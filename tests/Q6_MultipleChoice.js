/**
 * Real test Q6 final
 *
 * With the following Javascript code:
 --------------------------------------
 */

console.log("1");
myAsyncFunction("abc", function (error, result) {
    console.log("2");
});
console.log("3");


/** ----------------------------------------------------------------------------------

 What should we see?

 Pick one of the choices:

 - 1,2,3
 - 1,3,2
 - Impossible to predict <-----(CORRECT)

 */