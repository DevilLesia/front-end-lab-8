function forEach(array, functionAsArguments) {
	for (var i = 0; i < array.length; i++) {
		functionAsArguments(array[i]);
	}
}
