// https://edabit.com/challenge/Q3n42rEWanZSTmsJm
//TODO: Practice this more -> min and max and arrays
function minMax(arr) {
    // get the data type
    let datatype = typeof(arr);

    // for arrays
    if (datatype == 'object') {
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        console.log("is an array");
	    return [min, max];
    }

    // for numbers
    else if (datatype == 'number') {
        let min = Math.min(arr);
        let max = Math.max(arr);
        console.log("is a number");
	    return [min, max]; 
    }

    // for string of numbers
    else if (datatype == 'string') {
        // convert string to an array on numbers
        let strToArr = arr.split(',');
        let numArr = strToArr.map(Number);
        let min = Math.min(...numArr);
        let max = Math.max(...numArr);

        console.log("is a string");
	    return [min, max]; 
    }

    // check if argument is valid
    else {
        console.error("Invalid argument type. Please provide an array, a number, or a string of numbers separated by commas.");
        return null;
    }

    
}

// test case debug
let usrNum = [1, '222', -3, 14, '3'];
//let usrNum = 1, -2, 3, 14, 5;
console.log(minMax(usrNum));
//console.log(typeof(usrNum));


