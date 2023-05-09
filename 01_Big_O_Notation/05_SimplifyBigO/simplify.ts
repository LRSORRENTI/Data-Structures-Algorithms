/* 
=============================
SIMPLIFYING BIG O EXPRESSIONS
=============================

let's go over some rules to help 
simplify things, so that as n grows, 
our runtime remains relatively constant

When determining the time complexity of an 
algorithm, there are some helpful 
rules for Big O expressions 

These rules are consequences of the definition 
of Big O 

CONSTANTS DON'T MATTER 

if we have O(2n) we simplify that down to O(n)

O(500) simplifies to O(1)

So O(n) means the time grows proportionate with n

but O(1) means n doesn't matter, it could be 
any huge number and it remains relatively constant
AKA O(1)

O(13n^2) simplifies to O(n^2)

If you know that 
the input size will always be small,
 then an algorithm with O(n) time 
 complexity may be perfectly adequate.
 
 However, if the input size is potentially 
 very large, it's a good idea to choose 
 an algorithm with lower time complexity,
  such as an O(1) algorithm, whenever possible.

In general, it's a good idea to think 
about the expected input size and choose 
an algorithm that is efficient for that 
input size. If you're not sure what the 
input size will be, or if it could 
potentially be very large, it's best 
to err on the side of caution and choose
 an algorithm with lower time complexity

*/

/*
Smaller terms don't matter! 

O(n + 10) is just O(n)

O(1000n + 50) is just  O(n)

O(n^2 + 5n + 8) is just O(n^2)



*/

/* 
Big O shorthands 

Analyzing complexity with big O can get complicated 

But there are rules of thumb that help

These rules don't always work, but they're a 
helpful starting point 

1. Arithmetic operations are constant 

2. Variable assignment is constant

3. Accessing elements in an array by index or 
   object key is constant 

4. In a loop, the complexity is the length of 
   the loop times the complexity of whatever 
   happens in the loop

Let's look at an example:
*/

// function logAtLeastFive(n) {
//   for (var index = 1; index <= Math.max(5, n); index++) {
//       console.log(index);
//   }
// }
// // logAtLeastFive(10) // logs 10
// logAtLeastFive(1) // logs 1 through 5
// // so it will print all numbers up to n, but 
// // at a minimum it prints 5

// export default logAtLeastFive

/* 
So what's the BIG O here? 

How would be categorize the above function

We have a loop that will go to either 5 or n, 
whichever one is larger 

In our case n doesn't matter, the loop will run 
however many times is needed, passed in by n

if we pass in 10 million, the loop runs 10 million 
times, so this is: 

O(n)

Because as n grows, the number of operations 
grows 


*/

/* 

if we looked at another function:

function logAtMostFive(n){
  for(i = 0; i <= Math.min(5, n); i++){
    console.log(i);
  }
}

This is O(1), it doesn't matter what n is

Remember O(1) is amazing, if we can have runtime 
of O(1) that's fantastic, it can be rare when 
dealing with more advanced algo's 

O(n) is ok, it's better than O(n^2)


*/