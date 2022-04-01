//good for array when nums are in range from 1-N
function cyclicSort(arr) {
    let i = 0;
    while (i < arr.length) {
        let correctIndex = arr[i] - 1;
        //check if element at correct index or not, if not swap otherwise move forward
        if (arr[i] != arr[correctIndex]) {
            //swap
            let temp = arr[i];
            arr[i] = arr[correctIndex];
            arr[correctIndex] = temp;
        } else {
            i++;
        }
    }
    console.log(arr);
}
cyclicSort([1, 3, 2, 5, 4, 8, 7, 6]);
