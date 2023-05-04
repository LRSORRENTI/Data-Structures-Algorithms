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