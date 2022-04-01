function insertionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            } else {
                break;
            }
        }
    }
    console.log(arr);
}
insertionSort([2, 1, 4, 3, 8, 5]);
