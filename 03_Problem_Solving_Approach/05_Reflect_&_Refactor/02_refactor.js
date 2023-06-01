"use strict";
// Let's go back to our last problem 
// and refactor
exports.__esModule = true;
exports.charCount = void 0;
function charCount(string) {
    var obj = {};
    for (var i = 0; i < string.length; i++) {
        var char = string[i].toLowerCase();
        // below we add an expression to 
        // test if a character is alpha-numeric
        if (/[a-z0-9]/.test(char)) {
            // REGEX weeds out anything not a-z, 0-9, 
            // and remember we lowercased it first above 
            // so its /[a-z]/ otherwise we'd need to expoand 
            // the regex to
            // if(/[a-zA-Z0-9]/.test(char))
            if (obj[char] > 0) {
                // first we check if the value 
                // is already in the object, if it's 
                // greater then 0 that means there's 
                // already at least one
                obj[char]++;
            }
            else {
                // otherwise, if it's not yet in the 
                // array, initialize it to one
                obj[char] = 1;
            }
        }
    }
    return obj;
}
exports.charCount = charCount;
// So the above works, if we finished this problem 
// in an interview setting, the main points our 
// interviewer may look at are: 
// 1. The for loop, for loops have their use cases 
//     but in today's landscape a for of loop so 
//     we don't need to work with 'i' b/c with 
//     a 'for of' loop on a string, it gives us 
//     each character immediately
// let's refactor!
var betterCharCount = function (str) {
    var obj = {};
    console.log(obj, "line 46")
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        // now we can eliminate the 
        // str[i].toLowerCase from above 
        // also keep in mind the placement of the 
        // .toLowerCase is it better to lowercase 
        // at the beginning? Do it first then check 
        // to see if it's alpha-numeric?
        // Or is it better to first check for 
        // alpha-numeric then lowercase? 
        // It depends on if we know roughly what 
        // most of the input strings look like, 
        // if we have a general idea of the inputs 
        // 
        // char = char.toLowerCase()
        // now let's also refactor that if statement
        // block of code
        // if(/[a-z0-9]/.test(char)) {

        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
            // what the above does is it takes 
            // a character from the object, and 
            // if true, add one to it, else initialize 
            // to 1 
            console.log(obj, "line 73")
        }
        // one thing to keep in mind is that 
        // REGEX check we have above, REGEX is cool
        // especially when needing to check for 
        // alpha-numeric values, BUT the caveat is 
        // that REGEX performance is variable, it's not 
        // a constant, depending on the environment, 
        // and the browser 
        console.log(obj, 'Line 82')
    }
    console.log(obj, 'line 84')
};
// We could utilize the built in charCodeAt()
var isAlphaNumeric = function (char) {
    // initialize code variable that will grab 
    // the character at index 0 since we're 
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric 0-9
        !(code > 64 && code < 91) && // upper A-Z
        !(code > 96 && code < 123)) { // lower a-z 
        return false;
    }
    return true;
};
// So above in our better charCount we can refactor!
betterCharCount("hello");

// $ node 02_refactor.js 
// {} line 46
// { h: 1 } line 73
// { h: 1 } Line 82
// { h: 1, e: 1 } line 73
// { h: 1, e: 1 } Line 82
// { h: 1, e: 1, l: 1 } line 73
// { h: 1, e: 1, l: 1 } Line 82
// { h: 1, e: 1, l: 2 } line 73
// { h: 1, e: 1, l: 2 } Line 82
// { h: 1, e: 1, l: 2, o: 1 } line 73
// { h: 1, e: 1, l: 2, o: 1 } Line 82
// { h: 1, e: 1, l: 2, o: 1 } line 84