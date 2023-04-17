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
addUpTwo(5);
addUpTwo(100);
// So that's one solution, another solution is: 
function addUpTo(n) {
    console.log(n * (n + 1) / 2);
    return n * (n + 1) / 2;
}
exports.addUpTo = addUpTo;
addUpTo(5);
addUpTo(100);
