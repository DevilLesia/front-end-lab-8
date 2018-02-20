function cypherPhrase(object, string) {
	var stringToArray = string.split('');
	var newWords = getTransformedArray(stringToArray, function(el) {
		for (var property in object) {
			if (el === property) {
				el = object[property];
			}
		}
		return el;
	});

	return newWords.join('');
}