/**
 * Real test Q5 final
 * Consider two functions below: will the return the same thing?
 *
 * Pick one of the choices:
 *
 * -yes
 * -no <------(CORRECT ANSWER)
 * -foo2 will give a run time error
 * -foo1 will give a run time error
 */


function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {
    return {
        bar: "hello"
    };
}

console.log("foo1 returns: ");
console.log(foo1());
console.log("foo2 returns: ");
console.log(foo2());

/*

console.log ("foo1 returns: ");
console.log(foo1());
console.log ("foo2 returns: ");
console.log(foo2());
-------------------------------
foo1 returns:
Object {bar:"hello"}
foo2 returns:
undefined
--------------------------------
No error will be thrown since the remainder of the code 
is perfectly valid, even it does not do anything.


*/
 