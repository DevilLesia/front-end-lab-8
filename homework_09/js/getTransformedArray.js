function getTransformedArray(array, getTrasfotmedElement) {
	var newArray = [];
	forEach(array, function(el) {
		newArray.push(getTrasfotmedElement(el));
	});
	return newArray;
}