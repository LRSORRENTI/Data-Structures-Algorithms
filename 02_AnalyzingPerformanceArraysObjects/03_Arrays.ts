/* 

======
ARRAYS
======

Let's go over arrays in the context of Big O,
the big selling point of arrays is the order, 
they have indexes, ordering of the data

There are advantages to order but it can come 
at a cost for some of the operations 



*/

let names: string[] = ["Michael", "Melissa", "Andrea"];

let values: any[] = [true, {}, 2, [], "awesome"];

/* 
We use arrays when we need order, but arrays are not 
the only solution for ordered lists of data

Soon we'll see linked lists, and doubly linked lists that 
also facilitate ordered listing of data

But this can often come at a cost, when we need 
fast insertion / removal of data

Accessing data in an array is very fast, O(1) 

While Searching is O(N)

Insertion and removal are.. well it depends 

So above in our names array, let's pretend it's 
actually 10,000 indexes in length, and we want to 
access index 9945, JavaScript isn't counting one 
by one all the way to 9945, there's a shortcut 
to that index, accessiong index 9945 in a huge 
array like this is still O(1), very fast!

But insertion and removal are much more varied, 
if we want to just add one name to the end of the 
10,000 index long version of our names array, it's 
still O(1), the .push() to add a name to the end 
is still very fast

But let's say we need to add this name to the 
0 index of an array, not the end, this changes 
the time complexity since every index in the entire 
10,000 length array now needs to change, index 2 becomes 
3, 3 becomes 4, all the way to the end

Re-indexing every single one is not trivial

The same is true for removing from the beginning, 
as it requires the same re-indexing of every element
in the 10,000 length array

So .push() and .pop() are always faster than 
.shift() and .unshift(), no matter what, unless 
it's an empty array, in which adding to the beginning 
or end is the same

*/

