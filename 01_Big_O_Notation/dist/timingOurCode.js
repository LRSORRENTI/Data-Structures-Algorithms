"use strict";
// We want to create a function that will 
// calculate the sum of all numbers from 1 
// up to, and including some number n
exports.__esModule = true;
exports.addUpTo = exports.addUpTwo = void 0;
function addUpTwo(num) {
    var total = 0;
    for (var i = 0; i <= num; i++) {
        total += i;
    }
    console.log(total);
    return total;
}
exports.addUpTwo = addUpTwo;
addUpTwo(6);
addUpTwo(100);
// So that's one solution, another solution is: 
function addUpTo(n) {
    console.log(n * (n + 1) / 2);
    return n * (n + 1) / 2;
    // and essentially what's happening is 
    // we add 1 to n rightaway in the parens, 
    // then mulitply that by n, then divide by two
    // so for addUpTo(6) it goes: 
    // 6 * (6 + 1) / 2
    // 6 * (7) / 2
    // 42 / 2
    // 21
    // basic pemdas 
}
exports.addUpTo = addUpTo;
addUpTo(6);
addUpTo(100);
// The main thing we're trying to do is timing these 
// is which version is better? 
/*

Why does it matter which version is better anyway?

Faster?

Less memory intensive?

More readable?

More concise?

All of these are valid concerns and it comes
down to the situation

Most people agree that the first two, speed and
memory are the most important

And often come at the expense of readability

First let's look at evaluating speed, how long
does our code take to execute

How do we measure this?

One way is to use a built-in timing function

Something like this:

*/
var t1 = performance.now();
addUpTo(100000000);
var t2 = performance.now();
console.log("Time elapsed: ".concat((t2 - t1), " seconds "));
