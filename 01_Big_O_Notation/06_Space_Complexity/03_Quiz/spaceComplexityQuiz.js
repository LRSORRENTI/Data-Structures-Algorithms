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

