var amountEURO, amountUSD, amountUAH1, amountUAH2, USD, EURO, oneEURO;
amountEURO = parseFloat(prompt('Enter euros ', ''));
amountUSD = parseFloat(prompt('Enter dollars ', ''));
USD = 27.1240;
EURO = 33.2324;

function ex_money() {


	if (amountEURO < 0 || isNaN(amountEURO) || amountUSD < 0 || isNaN(amountUSD)) {
		console.log('Incorrect input data');
		return;
	}
	amountUAH1 = (amountUSD * USD).toFixed(2);
	amountUAH2 = (amountEURO * EURO).toFixed(2);
	oneEURO = (EURO / USD).toFixed(2);
	console.log(amountEURO + ' euros are equal ' + amountUAH2 + ' UAH, ' + amountUSD + ' dollars are equal ' + amountUAH1 + ' UAH, one euro is equal ' + oneEURO + ' dollars.');
}

ex_money();