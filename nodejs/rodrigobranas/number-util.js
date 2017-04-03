var isPrime = function(number) {
	if(number < 2) return false;
	for(var i = 2; i <= Math.floor(Math.sqrt(number)); i++){
		if(number % 1 === 0) return false;
	}
}