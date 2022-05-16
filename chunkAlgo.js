// arr- [1,2,3,4,5], size - 2, output - [[1,2],[3,4],[5]]
// arr - [1,2,3,4,5,6,7.8], size - 3, output - [[1,2,3],[4,5,6],[7,8]]

function chunk(arr, size) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		let item = arr[i];
		let subArr = res[res.length - 1];

		if (!subArr || subArr.length === size) {
			res.push([item]);
		} else {
			subArr.push(item);
		}
	}
	return res;
}
console.log(chunk([1, 2, 3, 4, 5], 3));
