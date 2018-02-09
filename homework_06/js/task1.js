var a, b, c, p, S;
a = parseFloat(prompt('Enter a ', ''));
b = parseFloat(prompt('Enter b ', ''));
c = parseFloat(prompt('Enter c ', ''));

function triangle_type() {

	if (a + b <= c || a + c <= b || b + c <= a) {
		console.log("Incorrect data");
		return;
	}
	var type;
	if (a <= 0 || isNaN(a) || b <= 0 || isNaN(b) || c <= 0 || isNaN(c)) {
		console.log("Incorrect data");
		return;
	}

	p = (a + b + c) / 2;
	S = (Math.sqrt(p * (p - a) * (p - b) * (p - c)));
	if (isFloat(S)) {
		S = S.toFixed(2);
	}

	if (Math.pow(c, 2) == (Math.pow(a, 2) + Math.pow(b, 2)) ||
		Math.pow(a, 2) == (Math.pow(c, 2) + Math.pow(b, 2)) ||
		Math.pow(b, 2) == (Math.pow(c, 2) + Math.pow(a, 2))) {
		type = 'Right';
	} else if (a == b && b == c && c == a) {
		type = 'Equilateral';
	} else if (a == b || b == c || a == c) {
		type = 'Isosceles';
	} else if (a != b && b != c && c != a) {
		type = 'Scalene';
	}
	console.log('Type of triangle is ' + type + ' triangle and square is ' + S);
}

function isFloat(n) {
	return Number(n) === n && n % 1 !== 0;
}

triangle_type();