function decypherPhrase(object, string) {
	var newCharacterMap = {};
	for (var property in object) {
		newCharacterMap[object[property]] = property;
	}
	var newWords = cypherPhrase(newCharacterMap, string);
	return newWords;
}