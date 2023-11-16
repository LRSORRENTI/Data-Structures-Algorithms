function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(arr[j] > arr[i]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// The above is a working version of bubble sort, it's 
// not optimized

bubbleSort([37, 45, 29, 8]);