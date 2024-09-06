myArr = [1, 2, 3, 4, 5, 18, 19, 55, 99, 101]

def search(arr, val):
    # Initialize the minimum and maximum index pointers
    min = 0
    max = len(arr) - 1

    # Continue searching while the search range is valid
    while min <= max:
        # Calculate the middle index (integer division)
        middle = (min + max) // 2
        current_element = arr[middle]  # The element at the middle index

        # If the current element is less than the target value, move the minimum pointer up
        if current_element < val:
            min = middle + 1

        # If the current element is greater than the target value, move the maximum pointer down
        elif current_element > val:
            max = middle - 1

        # If the current element is equal to the target value, return the index
        else:
            print(middle)
            return middle

    # If the loop finishes and no match is found, return -1
    print(-1)
    return -1

search(myArr, 55)