"use strict";
// Implement a function that will accept a sorted 
// array and counts the unique vals in that array
exports.__esModule = true;
exports.countUniq = void 0;
// There can be negative nums, but it will always 
// be sorted 
// countUniq([1, 1, 1, 2]) // 2 
// countUniq([2, 2, 3, 4, 5, 5, 6, 7]) // 5
var countUniq = function (arr) {
    // first declare variable i set to 0
    var i = arr[0];
    // then start a loop, 
    for (var j = 1; j < arr.length; j++) {
        // j is going to be our pointer 
        // it will go through the array
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
        console.log(i, j);
    }
    return i + 1;
};
exports.countUniq = countUniq;
(0, exports.countUniq)([2, 2, 3, 4, 5, 5, 6, 7]);
// 0 1
// 1 2
// 2 3
// 3 4
// 3 5
// 4 6
// 5 7
