function collectIds(movies) {
	var newMovies = getFilteredArray(movies, function (el) {
		return el.rating > 3.0;
	});
	var newMoviesArray = getTransformedArray(newMovies, function (el) {
		return el.id;
	});
		return newMoviesArray;
}
