function getClosestToZero(...mas) {
	var min = mas[0];
	var sign;
	if (mas[0] > 0) {
		sign = 1;
	} else {
		sign = -1;
	}
	for (var i = 1; i < mas.length; i++) {
		if (Math.abs(mas[i]) < min) {
			min = Math.abs(mas[i]);
			if (mas[i] > 0) {
				sign = 1;
			} else {
				sign = -1;
			}
		}
	}
	return min * sign;
}