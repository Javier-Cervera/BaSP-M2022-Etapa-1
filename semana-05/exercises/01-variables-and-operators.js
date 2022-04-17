console.log('-- EXERCISE 1: VARIABLE AND OPERATORS');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una
 3er variable. */

console.log('-Exercise 1.a:');
var firstNumber = 9;
var secondNumber = 3;
var twoNumberSum = firstNumber + secondNumber;
console.log(twoNumberSum);

/* b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. */

console.log('\n-Exercise 1.b:');
var firstString = 'Hello ';
var secondString = 'world!';
var twoStringConcat = firstString + secondString;
console.log(twoStringConcat);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el
 resultado de la suma en una 3er variable (utilizar length). */

console.log('\n-Exercise 1.c:');
var firstStringForLength = 'number of';
var secondStringForLength = ' letters';
var twoStringLength = firstStringForLength.length + secondStringForLength.length;
console.log(twoStringLength);