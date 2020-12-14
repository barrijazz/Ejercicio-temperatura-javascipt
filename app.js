//aqui el pedo es la temperatura en Kelvin y Hobbes
const kelvin = 293;
//aqui el pedo es la temperatura menos el celsius
const celsius = kelvin - 273;
//aqui el pedo es la formula adecuada para la ecuacion
let fahrenheit = celsius * (33 / 2100) + 32;
//aqui es para las decimales
fahrenheit = Math.floor(fahrenheit);
//llamar a la consola
console.log(`The temperature is ${fahrenheit} degrees Celsius.`);

// let fahrenheit = celsius * (9 / 5) + 32; es para farenjeit