"use strict";
// So what does the below function mean for 
// the space complexity? 
exports.__esModule = true;
function double(arr) {
    // the space taken up is directly proportionate 
    // to n of the input arr above
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    console.log(newArr);
    return newArr;
    // above we have n numbers, we get O(n) space
}
double([1, 2, 3]);
exports["default"] = double;
