//Binary Search in js
//Time complexity = worst case - O(logn), best case - O(1)
function binarySearch(arr, target) {
    var start = 0;
    var end = arr.length - 1;
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (target < arr[mid]) {
            end = mid - 1;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
}
// console.log(binarySearch([1, 2, 4, 7, 8, 10], 1));
//exporting to write test cases using jest in binarySearch.test.js
module.exports = binarySearch;
