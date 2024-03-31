// https://www.youtube.com/watch?v=W7aULNubKpo
// tutorial: https://edabit.com/tutorial/javascript#strings

// variables 
var animal = "fox";
var website = "edabit.com";

console.log(`Animal: ${typeof animal}, Value: ${animal}, Length: ${animal.length}`);
console.log(`Website: ${typeof website}, Value: ${website}, Length: ${website.length}`);
console.log();

const temp = -7.5;
console.log(`Temp: ${typeof temp}, Value: ${temp}, Length: ${temp.length}`);
console.log();

const division = 100/2;
console.log(`Division: ${typeof division}, Value: ${division}, Length: ${division.length}`);
console.log();


let person1 = {
    fname: "Glenn",
    lname: "Lopez",
    age: 30
}
console.log(`Person 1: ${typeof person1}`);
console.log(`Person 1 Name: ${person1.fname} ${person1.lname}`);
console.log(`Person 1 Age: ${person1.age}`);
console.log(`Person 1 Age: ${person1.length}`);

let loopcounter1 = 1;
while (loopcounter1 <= 10) {
    console.log(loopcounter1);
    loopcounter1++;
}
