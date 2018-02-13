var N = +prompt('enter natural number N (0<N<=20) ', '');
if (N <= 0 || N >= 21 || !Number.isInteger(N)) {
	console.error('Incorrect!');
} else {
	var k = 1;
	var n = N - 1;
	for(var i = 1; i <= N; i++) {
		console.log("   ".repeat(n)+"[~]".repeat(k));
		k = k + 2;
		n = n - 1;
	}
}
