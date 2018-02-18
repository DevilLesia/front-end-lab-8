function reverseNumber(n) {
	var sign = 1;
	if (n < 0) {
		sign = -1;
		n = n * sign;
	}
	n = n + "";
	return sign * n.split("").reverse().join("");
}