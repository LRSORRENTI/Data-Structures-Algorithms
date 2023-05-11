/*
Question 1:
Determine the space complexity for the following function  

function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

This is O(1) space complexity because it uses a constant 
amount of memory regardless of the input size n, to change 
the above code to have a space complexity of O(n) we could 
do: 

function logUpTo(n) {
  var values = [];
  for (var i = 1; i <= n; i++) {
    values.push(i);
  }
  console.log(values);
}

Now our func has a space complexity of O(n),
because we create an array of values, storing 
all the values from '1' to 'n' using push()

This new array takes up space proportional to n, therefore
our new logUpTo(n) func has a space complexity of O(n)
*/

/*
Question 2:
Determine the space complexity for the following function  

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

A: This is O(1) again because we're using a constant 
size of memory regardless of what n is, we could make 
it O(1) again by adding an array to push values into



*/

/*

Question 3:


function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}

A: Space complexity of O(n)

The function creates a new array:
newArray, of size Math.ceil(array.length / 2),
 which is proportional to the input array
  size n. Therefore, the space complexity of
   creating newArray is O(n).

In the for loop, the function accesses 
each element of the input array and 
copies every second element to the newArray.

Since the newArray has n/2 elements, 
the space complexity of copying every 
second element from the input array to 
newArray is also O(n).

Therefore, the total space complexity 
of the function is the sum of the space 
required to store newArray and the space
required to copy every second element
 from the input array to newArray. 
 
 This results in a space complexity of O(n).


*/

/*
Question 4: 

Determine the space complexity for
 the following function

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

A: O(n) because the space complexity will grow as n grows
proportionately



*/