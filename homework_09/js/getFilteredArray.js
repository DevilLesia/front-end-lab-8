function getFilteredArray(array, predicateFunc) {
	var newFilteredArray = [];
	forEach(array, function (el) {
		if (predicateFunc(el)) {
			newFilteredArray.push(el);
		}
	});
	return newFilteredArray;
}