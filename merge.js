function merge(arr1, arr2) {
	const results = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}

	return results;
}
result = [ 1, 2, 3, 4, 4, 5, 6, 8 ];
let i = 4;
let j = 4;
var arr1 = [ 1, 3, 4, 5 ];
var arr2 = [ 2, 4, 6, 8 ];

//mergeSort([4, 20, 12, 10, 7, 9])

function mergeSort(arr) {
	//we are trying to get an array with one item then compair it.
	if (arr.length <= 1) return arr;
	//get mid
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));
	//at first is merge([1], [2])
	return merge(left, right);
}

module.exports = { merge, mergeSort };
