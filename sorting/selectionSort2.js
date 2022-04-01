function selectionSort(arr) {
    //run the steps n-1 times
    for (let i = 0; i < arr.length; i++) {
        //for each step, max item will come at the last index
        let last = arr.length - i;
        let max = 0;
        for (let j = 0; j < last; j++) {
            //find index with max value
            if (arr[j] > arr[max]) {
                max = j;
            }
        }
        let temp = arr[max];
        arr[max] = last;
        last = temp;
        max = 0;
    }
    console.log(arr);
}
selectionSort([1, 4, 7, 2, 3]);
