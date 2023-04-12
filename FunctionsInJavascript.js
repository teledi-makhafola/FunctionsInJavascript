//poundsToKg
function poundsToKg(pounds){

    return pounds * 0.45359237;
}
console.log(poundsToKg(100));
//arrow function
let poundsToKg = (pounds) => {return pounds * 0.45359237;}



// //inchesToCentimeters
function inchesToCentimeters(Inches){
    return Inches * 2.54;
}
console.log(inchesToCentimeters(6));
// //arrow function
let inchesToCentimeters = (Inches) => {return Inches * 2.54;}



// //fahrenheitToCelsius
function fahrenheitToCelsius(Fahrenheit){
    return Fahrenheit - 32 * 5/9;
}
console.log(fahrenheitToCelsius(440));
// //Arrow function
let fahrenheitToCelsius = (Fahrenheit) => {return Fahrenheit - 32 * 5/9;}


// //feetToMeters
function feetToMeters(feet){
    return feet / 3.281;
}
console.log(feetToMeters(6));
// //arrow function
let feetToMeters = (feet) => {return feet / 3.281;}
