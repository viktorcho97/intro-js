function oddOrEven(number){

	if(number % 1 == 0){
		if(number % 2 == 0){
			console.log("event");
		}else{
			console.log("odd");
		}
	} else{
		console.log('invalid number');
	}
}

oddOrEven(6);
oddOrEven(7);
oddOrEven(1.50);
