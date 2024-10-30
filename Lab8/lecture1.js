//Завдання 1
var varString = "Рядок";

var varNumber = "74";

var varObject = {
    name: Blob,
    age: 35,
};

var varArray = [1, 2, 3, 4, 5];

var varFunction = function() {
    return "Функція"
};

console.log(varString);
console.log(varNumber);
console.log(varObject);
console.log(varArray);
console.log(varFunction);

//Завдання 2
var varString = "1234";

var varNumber = 8756;

varString = Number(varString);
varNumber = String(varNumber);

console.log(varString, typeof varString);
console.log(varNumber, typeof varNumber);

//Завдання 3
var varString = "123";

var varNumber = 123;

console.log(varString == varNumber);

console.log(varString === varNumber);

//Завдання 4

//Шифрування
let number = 1234;

let encodedNumber = btoa(number.toString());

console.log(encodedNumber);

//Дешифрування
let decodedNumber = parseInt(atob(encodedNumber));

console.log(decodedNumber);