# Recursion 🐉

There are a few ways of solving problems, the non-recursive way ie. iteration methods, loops, etc..

Or **RECURSION**

Recursion is a process or function that calls itself until a base case is satisfied

Sometimes it can be a more effective alternative to iteration, and in this section we'll learn how to identify problems that would be good candidates for recursion to solve

## The Call Stack

When learning recursion it's important to keep the Call Stack in mind

In basically every programming language there is a data structure under the hood that manages what happens when functions are invoked

We'll dive deeper into stack data structures later but for now the Call Stack is a stack data structure that will push a function to the top of the stack whenever it's invoked

Then when the return keyword is used or when the function ends the compiler will pop it off