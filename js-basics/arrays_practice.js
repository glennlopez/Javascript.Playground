//https://www.youtube.com/watch?v=W6NZfCO5SIk

// array with 2 elements
let color = ["red", "orange"];
console.log("color: " + color);
console.log("color[0]: " + color[0]);
console.log("color[1]: " + color[1]);
console.log("color[2]: " + color[2]);
console.log("color[3]: " + color[3]);
console.log("color array size: " + color.length);
console.log();

// dynamic array resizing in js: adding a new element to the array without creating a new array and combining
color[2] = "yellow";
console.log("color: " + color);
console.log("color[0]: " + color[0]);
console.log("color[1]: " + color[1]);
console.log("color[2]: " + color[2]);
console.log("color[3]: " + color[3]);
console.log("color array size: " + color.length);
console.log();

color[3] = "magenta";
color[4] = "purple";
//color = [...color, "magenta", "purple"];
console.log("color: " + color);
console.log("color[0]: " + color[0]);
console.log("color[1]: " + color[1]);
console.log("color[2]: " + color[2]);
console.log("color[3]: " + color[3]);
console.log("color array size: " + color.length);


