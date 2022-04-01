//Time complexity = Best case - O(n), worst case - O(n^2)

function bubbleSort(arr) {
    //run the steps n-1 times
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        //for each step, max item will come at the last index
        for (let j = 1; j < arr.length - i; j++) {
            //swap if item is smaller than previous item
            if (arr[j] < arr[j - 1]) {
                //swap
                // arr[j] = [arr[j - 1], (arr[j - 1] = arr[j])][0];
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                swapped = true;
            }
        }
        //if no swap will occur in above if, that means array is already sorted so loop should end.
        if (swapped === false) break;
    }
    console.log(arr);
}
bubbleSort([1, 2, 3, 4, 5]);
