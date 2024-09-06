package main

import (
	"fmt"
)

// search performs a binary search to find the target value in a sorted array.
// If the value is found, it returns the index; otherwise, it returns -1.
func search(arr []int, val int) int {
	// Initialize the minimum and maximum index pointers
	min := 0
	max := len(arr) - 1

	// Continue searching while the range is valid
	for min <= max {
		// Calculate the middle index
		middle := (min + max) / 2
		currentElement := arr[middle] // The element at the middle index

		// If the current element is less than the target value, move the min pointer up
		if currentElement < val {
			min = middle + 1
			// If the current element is greater than the target value, move the max pointer down
		} else if currentElement > val {
			max = middle - 1
			// If the current element is equal to the target value, return the index
		} else {
			return middle
		}
	}

	// If the value is not found, return -1
	return -1
}

func main() {
	// Example usage of the search function
	arr := []int{1, 3, 5, 7, 9, 11}
	val := 7
	result := search(arr, val)

	// Output the result (index of the value or -1 if not found)
	fmt.Println(result) // Output will be 3 (the index of 7 in the array)
}
