console.log('-- EXERCISE 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
 resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log('-Exercise 6.a:');
function sumTwoNumbers(a, b) {
	return parseInt(a) + parseInt(b);
}
var result = sumTwoNumbers(4, 5);
console.log(result);

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
 mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

console.log('\n-Exercise 6.b:');
function sumTwoValidatedNumbers(a, b) {
	if (isNaN(a) || isNaN(b)) {
		alert('Error: One parameter is not a number, or both');
		return NaN;
	} else {
		return sumTwoNumbers(a, b);
	}
}
// result = sumTwoValidatedNumbers('a', 5);
// console.log(result);


/* c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número
 entero. */

console.log('\n-Exercise 6.c:');
function validateInteger(number) {
	return number % 1 === 0;
}

/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que
 haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */

console.log('\n-Exercise 6.d:');
function sumTwoValidatedIntNumbers(a, b) {
	if (isNaN(a) || isNaN(b)) {
		alert('Error: One parameter is not a number, or both');
		return NaN;
	} else if (validateInteger(a) && validateInteger(b)) {
		return sumTwoNumbers(a, b);
	} else {
		alert('Error: Number with decimals');
		return Math.round(parseFloat(a) + parseFloat(b));
	}
}
// result = sumTwoValidatedIntNumbers('4.9', 5);
// console.log(result);

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
 que todo siga funcionando igual. */

console.log('\n-Exercise 6.e:');
function validateIntNumbers(a, b) {
	if (isNaN(a) || isNaN(b)) {
		alert('Error: One parameter is not a number, or both');
		return NaN;
	} else if (a % 1 !== 0 || b % 1 !== 0) {
		alert('Error: Number with decimals');
		return Math.round(parseFloat(a) + parseFloat(b));
	} else {
		return parseInt(a) + parseInt(b);
	}
}
function newSumTwoNumbers(a, b) {
	return validateIntNumbers(a, b);
}
result = newSumTwoNumbers('4.9', 5);
console.log(result);
