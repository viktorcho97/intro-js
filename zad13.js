function distanceTime([speed1, speed2, timeInHours]){

	[speed1, speed2, timeInHours] = [speed1, speed2, timeInHours].map(Number);
	let s1 = [speed1] * [timeInHours];
	let s2 = [speed2] * [timeInHours];
	
	let distancebetweenobjects = s1 - s2;


	console.log('Разстоянието между 2-та обекта е:' + " "  + (distancebetweenobjects) + 'км');

}

distanceTime(['50' ,'32' ,'2']);
