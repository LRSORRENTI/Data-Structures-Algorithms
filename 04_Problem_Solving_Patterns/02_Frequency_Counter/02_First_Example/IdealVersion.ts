// Here's a better non-quadratic version 
// of the frequencyCounter, last version 
// we used nested loops, which should be avoided 
// when possible



// function same(arr1: Array<number>, arr2: Array<number>): boolean{
//     if(arr1. length !== arr2.length){
//         console.log("Please pass in two number arrays of \
//         equal length");
//         return false;
//     }
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     for(let val of arr1){
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//     }
//     for(let val of arr2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//     }
//     for(let key in frequencyCounter1){
//         if(!(key ** 2  in frequencyCounter2)){
//             return false;
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//             return false;
//         }
//     }
//     return true;
// }

function same(arr1: Array<number>, arr2: Array<number>): boolean {
    // Check if the arrays have equal length
    if (arr1.length !== arr2.length) {
        console.log("Please pass in two number arrays of equal length");
        return false;
    }

    // Create an object to store the 
    //frequencies of values in arr1

    /* 
  
 Record<K, V> utility type is used to 
 define an object type where the keys 
 of the object are of type K and the values
  are of type V. It allows you to 
  explicitly specify the type of keys 
  and values for an object.

For example, in the code snippet:

let frequencyCounter1: Record<number, number> = {};
let frequencyCounter2: Record<number, number> = {};

The Record<number, number> type annotation s
pecifies that frequencyCounter1 and 
frequencyCounter2 are objects with
 number keys and number values. 
 
 It ensures that only numbers can be 
 used as keys and values within these objects.

Using Record helps enforce type safety
 and provides clarity about the expected
  structure of the object. 
  
  It helps prevent accidental 
  usage of incorrect key or value 
  types and enables better static 
  type checking during development.
    */
    let frequencyCounter1: Record<number, number> = {};

    // Create an object to store the 
    //frequencies of values in arr2
    let frequencyCounter2: Record<number, number> = {};

    // Iterate over arr1 and count the 
    //frequencies of values
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    // Iterate over arr2 and count the 
    //frequencies of values
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    // Iterate over the keys in frequencyCounter1
    for (let key in frequencyCounter1) {
        // Check if the square of the current
        // key is present in frequencyCounter2
        if (!(parseInt(key) ** 2 in frequencyCounter2)) {
            console.log(frequencyCounter1)
            console.log(frequencyCounter2)
            return false;
        }

        // Check if the frequencies of the
        // square values are the same in 
        //both frequency counters
        if (frequencyCounter2[parseInt(key) ** 2] !== frequencyCounter1[parseInt(key)]) {
            console.log(frequencyCounter1)
            console.log(frequencyCounter2)
            return false;
        }
    }

    // All conditions passed, return true 
    //indicating that arr2 has the 
    //squares of elements in arr1
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    return true;
}

console.log(same([1, 2, 3], [9, 4, 1]));
console.log(same([4, 5, 9], [16, 25, 81]));
console.log(same([1, 3, 7], [1, 6, 8]));
console.log(same([1, 2], [3, 4, 5]))

/*

$ ts-node IdealVersion.ts 
{ '1': 1, '2': 1, '3': 1 }
{ '1': 1, '4': 1, '9': 1 }
true
{ '4': 1, '5': 1, '9': 1 }
{ '16': 1, '25': 1, '81': 1 }
true
{ '1': 1, '3': 1, '7': 1 }
{ '1': 1, '6': 1, '8': 1 }
false
Please pass in two number arrays of equal length
false
*/

// This version is Big O(n), because 
// as n grows, time grows proportionate to n, 
// if we pass in arrays that are 1000 indexes long
// it will still be O(n) in our other example O(n ^ 2)
// if we passed in two arrays that's a million iterations
// this is why big O matters, when the input size 
// grows, we don't want anything worse than O(n), 
// O(1) would be amazing but O(n) is way better 
// than quadratic