/*

Let's go back to that old example from before:

Write a function that takes in a string and
returns counts of each character

*/
// console.log(2)
// export function charCount(str){
//     // create an object to 
//     // return every character passed 
//     // into str, and how many times that 
//     // character appears in str
//     let result = {}
//     // loop over str to identify every char
//     for(let i = 0; i < str.length; i++){
//         // we first just check if the character 
//         // is inside our result object 
//       let char = str[i]
//       if(result[char] > 0){
//       // meaning if result[char] already exists
//       result[char]++
//       // increment the count for that character by one
//     } else {
//         // So if it doesn't already exist, we add 
//         // and set the value of our new char to one
//         result[char] = 1
//     }
// }
// // return our result object containing key value 
// // pairs for every char in the passed in str 
// return result
// }
// console.log(charCount("Hello World"))
// console.log(1)
function charCount(str) {
    var result = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (result[char] > 0) {
            result[char]++;
        }
        else {
            result[char] = 1;
        }
    }
    return result;
}
console.log(charCount("Hello World"));
console.log(1);

// $ node 03_Problem_Solving_Approach/07_SolveSimplify.js
// { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }

console.log(charCount("Luke Sorrenti"));

{ L: 1, u: 1, k: 1, e: 2, ' ': 1, S: 1, o: 1, r: 2, n: 1, t: 1, i: 1 }