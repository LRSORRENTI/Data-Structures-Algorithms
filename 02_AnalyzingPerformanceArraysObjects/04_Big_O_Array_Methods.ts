/*

======================
BIG O OF ARRAY METHODS
======================

Quick note, memorizing this info 
is not necessary, the goal is to become 
aware that different methods will 
have different time and space complexities

Understanding the basics will help you be able 
to look at an algorithm, and have an informed 
idea of what it's time complexity is, remember, 
we count operations as a rule of thumb

Here's a quick overview, YOU DON'T NEED TO MEMORIZE:

- .push() O(1)

- .pop() O(1)

- .shift() O(N)

- .unshift() O(N)

- .concat() O(N)

- .slice() O(N)

- .splice() O(N)

- .sort() O(N * log N)

- .forEach/map/filter/reduce etc.. O(N)

*/

/*

=========================================
QUICK NOTE FOR WHY .sort() is (n * log n)
=========================================

The .sort() method in JavaScript typically 
uses a comparison-based sorting algorithm
 known as "introsort." 

 Introsort is a hybrid sorting algorithm
  that combines quicksort, heapsort, and 
  insertion sort. The time complexity of 
  the .sort() method is indeed O(n * log n), 
  where n is the number of elements in the array.

Here's why:

Best-Case Scenario: In the best-case
 scenario, when the input array is already 
 sorted or nearly sorted, the .sort() 
 method can achieve a time complexity of O(n). 
 
 It performs a single pass to check if 
 the array is sorted, which can be done 
 in linear time.

Average and Worst-Case Scenario: 
In the average and worst-case scenarios,
 where the array is randomly or completely 
 unsorted, the algorithm resorts to a 
 combination of quicksort, heapsort, and 
 insertion sort. Quicksort and heapsort 
 have an average time complexity 
 of O(n * log n), while insertion sort
  has a time complexity of O(n^2). However,
   the algorithm switches to insertion sort
    for small subarrays to improve efficiency.


The average time complexity of introsort, 
combining these algorithms, remains O(n * log n).
 Although worst-case time complexity 
 could be O(n^2), it is rare due to the 
 switch to insertion sort for small subarrays.

The O(n * log n) time complexity of .sort()
 is considered quite efficient for general-
 purpose sorting algorithms. It allows 
 the method to handle large arrays reasonably 
 well, although it's important to note that 
 the actual performance can depend on 
 factors such as the specific implementation 
 and the characteristics of the input data.










*/