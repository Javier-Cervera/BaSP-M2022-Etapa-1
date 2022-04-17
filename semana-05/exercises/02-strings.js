console.log('-- EXERCISE 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
 toUpperCase). */

console.log('-Exercise 2.a:');
var firstString = 'radium rocket';
console.log(firstString.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('\n-Exercise 2.b:');
var secondString = 'Lorem ipsum';
var secondStringFirstFive = secondString.substring(0, 5);
console.log(secondStringFirstFive);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('\n-Exercise 2.c:');
var thirdString = 'abcdefghij';
var thirdStringLastThree = thirdString.substring(thirdString.length-3);
console.log(thirdStringLastThree);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
 mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
 toLowerCase y el operador +). */

console.log('\n-Exercise 2.d:');
var fourthString = 'seNtenCEcasE';
var fourthStringSentenceCase = fourthString.substring(0, 1).toUpperCase() + fourthString.substring(1).toLowerCase();
console.log(fourthStringSentenceCase);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
 primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log('\n-Exercise 2.e:');
var fifthString = 'white space';
var fifthStringWhitespace = fifthString.indexOf(' ');
console.log(fifthStringWhitespace);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
 Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
 palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
 operador +). */

 console.log('\n-Exercise 2.f:');
var sixthString = 'JavaScript sTaRTCAse';
var whitespace = sixthString.indexOf(' ');
var sixthStringStartCase = sixthString.substring(0, 1).toUpperCase() + sixthString.substring(1, whitespace)
.toLowerCase() + ' ' + sixthString.substring(whitespace + 1, whitespace + 2).toUpperCase() + sixthString
.substring(whitespace + 2).toLowerCase();
console.log(sixthStringStartCase);
