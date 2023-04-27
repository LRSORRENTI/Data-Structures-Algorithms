"use strict";
// We want to create a function that will 
// calculate the sum of all numbers from 1 
// up to, and including some number n
exports.__esModule = true;
exports.addUpTo = exports.addUpToAgain = void 0;
function addUpToAgain(num) {
    var total = 0;
    for (var i = 0; i <= num; i++) {
        total += i;
    }
    console.log(total);
    return total;
}
exports.addUpToAgain = addUpToAgain;
addUpToAgain(6);
addUpToAgain(100);
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
addUpToAgain(100);
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

// 5050
// 21
// 5050
// 5000000050000000
// Time elapsed: 0.2107999324798584 seconds


/* 
This approach where we time things before and after 
then comparing it to the other function

It's not that easy to talk about, there are 
better ways of talking about how performance wise 
one piece of code compares to another

Which brings us to the problem with time:

- Different machines will record different times 

- The same machine will record different times!

- For very fast algorithms, speed measurements alone
  may not be precise enough

  So how do we accomplish this? 

  Well there are other ways to measure performance, 
  we can assign a value based on how code compares 
  to other code 

  This is where Big O Notation comes into play


*/