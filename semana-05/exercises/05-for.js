console.log('-- EXERCISE 5: FOR');

/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
 una alerta utilizando cada una de las palabras. */

console.log('-Exercise 5.a:');
var words = ['one', 'Two', 'three', 'four', 'five'];
for (var word of words) {
	alert(word);
}

/* b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra
 modificada. */

console.log('\n-Exercise 5.b:');
var wordsB = words.slice();
for (var i = 0; i < wordsB.length; i++) {
	// Check first letter isn't uppercase. Show only modified words
	if (wordsB[i].substring(0, 1) != wordsB[i].substring(0, 1).toUpperCase()) {
		wordsB[i] = wordsB[i].substring(0, 1).toUpperCase() + wordsB[i].substring(1);
		alert(wordsB[i]);
	}
}

/* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
 bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la
 cadena completa. */

console.log('\n-Exercise 5.c:');
var sentence = '';
for (word of words) {
	sentence += word;
}
alert(sentence);

/* d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es
 decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta
 al número 9. Mostrar por la consola del navegador el array final (utilizar console.log). */

console.log('\n-Exercise 5.d:');
numbers = [];
for (i = 0; i <= 9; i++) {
	numbers.push(i);
}
console.log(numbers);