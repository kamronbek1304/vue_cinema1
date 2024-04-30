// Задание №1
let MyName = prompt("Введите свое имя: ")
let Surname = prompt("Введите свою фамилию: ")
let num_5 = 5 
let num_1 = 1
let num1 = +prompt(`чтобы доказать что вы не робот пройдите тестирование
сколько будет ${num_5} +  ${num_1} `)
let num_8 = 8
let num_2 = 2
let num2 = +prompt(`сколько будет ${num_8} * ${num_2} `)
let num3 = +prompt(`сколько будет ${num_8} / ${num_2} `)
console.log(`Его зовут: ${MyName}`);
console.log(`его фамилия: ${Surname}`);
console.log(`Пример : ${num_5} + ${num_1} = ${num1}`);
console.log(`Пример : ${num_8} * ${num_2} = ${num2}`);
console.log(`Пример : ${num_8} / ${num_2} = ${num3}`);

// Задание №2

var X = parseFloat(prompt("Введите значение для переменной X:"));
var Y = parseFloat(prompt("Введите значение для переменной Y:"));
var Z = parseFloat(prompt("Введите значение для переменной Z:"));

var res = (X + Y + Z) / 3;

alert("Среднее арифметическое чисел " + X + ", " + Y + ", " + Z + " равно: " + res);
