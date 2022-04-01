function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    let isAsc = arr[start] < arr[end];

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (target === arr[mid]) {
            return mid;
        }
        if (isAsc) {
            if (target < arr[mid]) {
                end = mid - 1;
            } else if (target > arr[mid]) {
                start = mid + 1;
            }
        } else {
            if (target > arr[mid]) {
                end = mid - 1;
            } else if (target < arr[mid]) {
                start = mid + 1;
            }
        }
    }
}
console.log(binarySearch([91, 89, 76, 55, 34, 23, 12, 3, 1, 0], 23));
