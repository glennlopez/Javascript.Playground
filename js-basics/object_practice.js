let name = "Glenn";     // string
let age = 100;          // number
let id = "123456D";    // string

let person = {          // object literal
    name: "Glenn",
    age: 100,
    id: "123456D"
};           

console.log("person: " + typeof person);
console.log("person.name: " + typeof person.name);

person.name = "new-name";
person.name = 1.99;

console.log("person.name = " + person.name);
console.log("person.name: " + typeof person.name);

let userSelection = "name";
console.log("person[userSelection]: " + person[userSelection]);
