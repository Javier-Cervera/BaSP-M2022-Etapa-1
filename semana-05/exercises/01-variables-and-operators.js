console.log('-- EXERCISE 1: VARIABLE AND OPERATORS');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una
 3er variable. */

console.log('-Exercise 1.a:');
var firstNumber = 9;
var secondNumber = 3;
var result = firstNumber + secondNumber;
console.log(result);

/* b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. */

console.log('\n-Exercise 1.b:');
var firstString = 'Hola ';
var secondString = 'mundo!';
result = firstString + secondString;
console.log(result);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el
 resultado de la suma en una 3er variable (utilizar length). */

console.log('\n-Exercise 1.c:');
var firstStringForLength = 'cantidad ';
var secondStringForLength = 'de letras';
result = firstStringForLength.length + secondStringForLength.length;
console.log(result);