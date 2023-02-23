function insertionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let currentValue = arr[i];

		for (let j = i - 1; j > -1 && arr[j] > currentValue; j--) {
			arr[j + 1] = arr[j];
		}
		// below line did not make sense ! where is j coming from
		arr[j + 1] = currentValue;
	}

	return arr;
}

module.exports = insertionSort;
