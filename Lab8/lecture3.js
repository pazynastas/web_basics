//Унарні оператори ++, --, typeof, !
let x = 5;
x++;
console.log(x);

let isTrue = !false;
console.log(isTrue);

console.log(typeof x);

//Бінарні оператори  +, -, *, /, ==, &&, ||
let a = 10;
let b = 20;
let sum = a + b;
console.log(sum);

let isEqual = (a == b);
console.log(isEqual);

let andOperator = (a > 5 && b < 30);
console.log(andOperator);

//Тернарні оператори
let age = 18;
let access = age >= 18 ? "Доступ дозволено" : "Доступ заборонено";
console.log(access);


//Завдання 2
let line1 = "Нехай завжди буде сонце,";
let line2 = "Нехай завжди буде небо,";
let line3 = "Нехай завжди буде мама,";
let line4 = "Нехай завжди буду я.";

let poem = line1.concat("\n", line2, "\n", line3, "\n", line4);

console.log(poem);
