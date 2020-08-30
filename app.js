//Current temperature in kelvin degrees
const kelvin= 0;
//Current temperature in celsius degrees
const celsius= kelvin - 273;
//Current temperature in fahrenheit degrees
let fahrenheit= celsius * (9 / 5) + 32;
//Fahrenheit degrees rounded down
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);