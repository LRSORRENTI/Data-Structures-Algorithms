# Divide & Conquer Pattern

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data

***This pattern can TREMENDOUSLY decrease time complexity***

An example: 

Given a sorted array of integers, write a function called search that accepts a value and returns the index where the value passed to the function is located, if the value is not found return -1

```
search([1,2,3,4,5,6], 4) // 3
search([1,2,3,4,5,6], 6) // 5
search([1,2,3,4,5,6], 11) // -1
```