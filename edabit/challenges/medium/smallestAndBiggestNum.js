// https://edabit.com/challenge/Q3n42rEWanZSTmsJm
//TODO: Practice this more -> min and max and arrays
function minMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
	return [min, max];
}

// test case debug
console.log(minMax([1, -2, 3, 14, 5]));

