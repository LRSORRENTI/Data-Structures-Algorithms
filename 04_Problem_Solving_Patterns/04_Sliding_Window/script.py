# Consider an example where we parse a string
# to find the longest sequence of unique characters

hello = "hellothere"

# In the above example the longest sequence would be "lother"

# An example we'll use below we write a function that 
# accepts an array of integers and a number 'n' The function
# should calculate the maximum sum of n  consecutive elements 
# in the array
negative_infinity = float('-inf')

def max_sub_arr_sum(arr, num):
    # Initialize the variable to store the maximum sum found
    max_sum = 0  
    # Initialize the temporary sum used to track the current window sum
    temp_sum = 0  

    # If the array is smaller than the required subarray size, return None
    if len(arr) < num:  
        return None

    # Calculate the sum of the first 'num' elements (initial window)
    for i in range(num):
        max_sum += arr[i]
    # Set temp_sum to the sum of the first window
    temp_sum = max_sum  

    # Slide the window across the array, starting from index 'num'
    for i in range(num, len(arr)):
        # Update temp_sum by subtracting the element going out of the window 
        # and adding the new element coming into the window
        temp_sum = temp_sum - arr[i - num] + arr[i]

        # Update max_sum if the new temp_sum is larger
        max_sum = max(max_sum, temp_sum)
    print(max_sum)  # Print the maximum sum found (for debugging or info)

    return max_sum  # Return the maximum sum of any subarray of length 'num'


max_sub_arr_sum([1,2,4,2,8,1,5], 2) # 10
max_sub_arr_sum([1,2,5,2,8,1,5], 4) # 17
max_sub_arr_sum([4,2,1,6], 1) # 6
max_sub_arr_sum([4,2,1,6,2], 4) # 13
max_sub_arr_sum([], 4) # null