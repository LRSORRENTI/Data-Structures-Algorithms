// console.log('ts-node working?')

/* 
```````````````````````````````````
OBJECTS: Unordered key value pairs!

```````````````````````````````````
*/

let instructor = {
    firstName: "Colt",
    isInstructor: true,
    favoriteNums: [1, 2, 3]
}


// Objects work well when we don't need order,
// and when fast access and removal is needed 

/* 
BIG O OF OBJECTS: 

Insertion: O(1)

Removal: O(1)

Searching: O(n)

Access: O(1)

When ordering is not needed, objects are 
a good choice


Big O of Object Methods: 

Object.keys: O(n)

Object.values: O(n)

Object.entries: O(n)

hasOwnProperty: O(1)

*/

console.log(Object.keys(instructor))
// O(n) - [ 'firstName', 'isInstructor', 'favoriteNums' ]

console.log(Object.entries(instructor))
// O(n) - [
//   [ 'firstName', 'Colt' ],
//   [ 'isInstructor', true ],
//   [ 'favoriteNums', [ 1, 2, 3 ] ]
// ]

console.log(instructor.hasOwnProperty("firstName"))
// O(1) - true