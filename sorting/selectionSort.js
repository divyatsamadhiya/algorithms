function selectionSort(arr) {
    //run the steps n-1 times
    for (let i = 0; i < arr.length; i++) {
        let start = 0;
        let last = arr.length - i - 1;
        //get maximum index of the array
        let maxValue = max(arr, start, last);
        //swap max index with the last index
        let temp = arr[last];
        arr[last] = arr[maxValue];
        arr[maxValue] = temp;
    }
    console.log(arr);
}
//function to find index with max value
function max(arr, start, last) {
    let maxValue = start;
    for (let i = start; i <= last; i++) {
        if (arr[i] > arr[maxValue]) {
            maxValue = i;
        }
    }
    return maxValue;
}

selectionSort([-1 - 9, 0, 4, 3]);
